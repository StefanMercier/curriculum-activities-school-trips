-- Remove the public read policy that exposes admin emails
DROP POLICY IF EXISTS "Anyone can read admin users" ON public.admin_users;

-- Create a secure function to check if a user is an admin without exposing emails
CREATE OR REPLACE FUNCTION public.check_is_admin(user_email TEXT)
RETURNS BOOLEAN AS $$
BEGIN
  -- Check if the provided email exists in admin_users table
  RETURN EXISTS (
    SELECT 1 FROM public.admin_users 
    WHERE email = user_email
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;