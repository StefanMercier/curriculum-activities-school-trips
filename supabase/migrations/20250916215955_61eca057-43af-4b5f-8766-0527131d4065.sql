-- Fix admin_users table security vulnerability
-- Enable RLS on admin_users table if not already enabled
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- Create policy that only allows authenticated admin users to read admin_users table
CREATE POLICY "Only admins can read admin users" 
ON public.admin_users 
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

-- Create policy for admin users to insert new admin users (admin management)
CREATE POLICY "Admins can insert admin users" 
ON public.admin_users 
FOR INSERT 
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.admin_users 
    WHERE email = (
      SELECT email FROM auth.users 
      WHERE id = auth.uid()
    )
  )
);

-- Note: The check_is_admin function uses SECURITY DEFINER so it will bypass RLS
-- and continue to work for checking admin status without exposing emails