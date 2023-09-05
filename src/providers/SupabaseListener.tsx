'use client';
import { userGlobalSession } from 'context/appContext';
import { get, has } from 'lodash';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { useSupabaseApp } from './SupabaseProvider';

export default function SupabaseListener() {
  const { supabase } = useSupabaseApp();
  const router = useRouter();
  const [userGlobalState, setUserGlobalState] = useRecoilState(userGlobalSession);

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && has(get(session, 'user', null), 'id')) {
        setUserGlobalState(session as any);
      } else if (event === 'SIGNED_OUT') {
        setUserGlobalState(null);
        router.replace('/');
      }
      router.refresh();
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [router, supabase]);

  return null;
}
