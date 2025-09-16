-- Fix the critical security vulnerability in leads table RLS policy
-- Drop the overly permissive policy that allows public read access
DROP POLICY IF EXISTS "Users can read their own leads" ON public.leads;

-- Create a secure policy that only allows admin users to read leads
CREATE POLICY "Only admins can read leads" 
ON public.leads 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.admin_users 
    WHERE email = (
      SELECT email FROM auth.users 
      WHERE id = auth.uid()
    )
  )
);

-- Keep the insert policy as is (anyone can submit leads)
-- The existing "Anyone can insert leads" policy is fine for lead capture