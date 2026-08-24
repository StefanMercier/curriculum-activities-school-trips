-- 1. Fix admin bootstrap privilege escalation
DROP POLICY IF EXISTS "Allow admin bootstrap and admin management" ON public.admin_users;

CREATE POLICY "Only existing admins can add admins"
ON public.admin_users
FOR INSERT
TO authenticated
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.admin_users a
    WHERE a.email = (SELECT u.email FROM auth.users u WHERE u.id = auth.uid())::text
  )
);

-- 2. Replace always-true INSERT policy on leads with a validated, role-scoped policy
DROP POLICY IF EXISTS "Anyone can insert leads" ON public.leads;

CREATE POLICY "Visitors can submit valid leads"
ON public.leads
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(btrim(first_name)) BETWEEN 1 AND 100
  AND length(btrim(last_name)) BETWEEN 1 AND 100
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND length(email) <= 254
  AND (school_group IS NULL OR length(school_group) <= 200)
  AND (zip_code IS NULL OR length(zip_code) <= 20)
  AND (phone_number IS NULL OR length(phone_number) <= 40)
  AND (has_organized_trip IS NULL OR has_organized_trip IN ('yes', 'no'))
  AND (activity_title IS NULL OR length(activity_title) <= 300)
);

-- 3. Pin search_path on functions that lack it
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS trigger
LANGUAGE plpgsql
SET search_path TO 'public'
AS $function$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$function$;

CREATE OR REPLACE FUNCTION public.notify_sheets_on_signup()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public', 'extensions'
AS $function$
BEGIN
  PERFORM net.http_post(
    url := 'https://xsvqutkccemkxclodeyz.supabase.co/functions/v1/sync-to-sheets',
    headers := jsonb_build_object('Content-Type', 'application/json'),
    body := jsonb_build_object(
      'type', 'INSERT',
      'table', 'teacher_profiles',
      'record', row_to_json(NEW)
    )
  );
  RETURN NEW;
END;
$function$;

-- 4. Revoke direct API execution of SECURITY DEFINER functions that should not be callable
REVOKE ALL ON FUNCTION public.get_itinerary_by_token(uuid) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.get_itinerary_by_token(uuid) TO service_role;

REVOKE ALL ON FUNCTION public.notify_sheets_on_signup() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.update_updated_at_column() FROM PUBLIC, anon, authenticated;

-- The activity gate functions must stay callable by the public site, but only
-- ever return a boolean and never expose stored emails.
REVOKE ALL ON FUNCTION public.check_is_admin(text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.check_is_admin(text) TO anon, authenticated, service_role;
REVOKE ALL ON FUNCTION public.check_user_access(text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.check_user_access(text) TO anon, authenticated, service_role;