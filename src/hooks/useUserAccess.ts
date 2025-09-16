import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface UserAccess {
  hasAccess: boolean;
  isAdmin: boolean;
  userEmail: string | null;
  loading: boolean;
}

export const useUserAccess = () => {
  const [userAccess, setUserAccess] = useState<UserAccess>({
    hasAccess: false,
    isAdmin: false,
    userEmail: null,
    loading: true,
  });

  const checkUserAccess = async (email: string) => {
    try {
      const { data, error } = await supabase.rpc('check_user_access', {
        user_email: email,
      });

      if (error) {
        console.error('Error checking user access:', error);
        return false;
      }

      return data;
    } catch (error) {
      console.error('Error checking user access:', error);
      return false;
    }
  };

  const checkIsAdmin = async (email: string) => {
    try {
      const { data, error } = await supabase.rpc('check_is_admin', {
        user_email: email,
      });

      if (error) {
        console.error('Error checking admin status:', error);
        return false;
      }

      return data;
    } catch (error) {
      console.error('Error checking admin status:', error);
      return false;
    }
  };

  const grantAccess = async (email: string) => {
    console.log('🔐 Granting access for:', email);
    const hasAccess = await checkUserAccess(email);
    const isAdmin = await checkIsAdmin(email);
    
    console.log('✅ Access check result:', { hasAccess, isAdmin });
    
    setUserAccess({
      hasAccess,
      isAdmin,
      userEmail: email,
      loading: false,
    });

    // Store in localStorage for persistence
    localStorage.setItem('userEmail', email);
    localStorage.setItem('hasAccess', hasAccess.toString());
    localStorage.setItem('isAdmin', isAdmin.toString());
  };

  const revokeAccess = () => {
    setUserAccess({
      hasAccess: false,
      isAdmin: false,
      userEmail: null,
      loading: false,
    });
    
    localStorage.removeItem('userEmail');
    localStorage.removeItem('hasAccess');
    localStorage.removeItem('isAdmin');
  };

  // Check stored access on mount
  useEffect(() => {
    const checkStoredAccess = async () => {
      const storedEmail = localStorage.getItem('userEmail');
      const storedAccess = localStorage.getItem('hasAccess') === 'true';
      const storedAdmin = localStorage.getItem('isAdmin') === 'true';

      console.log('🚀 Checking stored access:', { storedEmail, storedAccess, storedAdmin });

      if (storedEmail && storedAccess) {
        console.log('🔄 Verifying stored access...');
        // Verify access is still valid
        await grantAccess(storedEmail);
      } else {
        console.log('❌ No valid stored access found');
        setUserAccess(prev => ({ ...prev, loading: false }));
      }
    };

    checkStoredAccess();
  }, []);

  return {
    ...userAccess,
    grantAccess,
    revokeAccess,
    checkUserAccess,
  };
};