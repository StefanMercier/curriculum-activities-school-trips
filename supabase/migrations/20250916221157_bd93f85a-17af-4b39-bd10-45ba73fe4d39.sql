-- Fix admin system initialization lockout issue
-- Drop the existing restrictive insert policy
DROP POLICY IF EXISTS "Admins can insert admin users" ON public.admin_users;

-- Create a new policy that allows bootstrapping the first admin
CREATE POLICY "Allow admin bootstrap and admin management" 
ON public.admin_users 
FOR INSERT 
WITH CHECK (
  -- Allow insertion if no admins exist (bootstrap case)
  (SELECT COUNT(*) FROM public.admin_users) = 0
  OR
  -- Or if user is already an authenticated admin
  EXISTS (
    SELECT 1 FROM public.admin_users 
    WHERE email = (
      SELECT email FROM auth.users 
      WHERE id = auth.uid()
    )
  )
);