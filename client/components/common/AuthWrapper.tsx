import { useRouter } from 'next/router';
import { useAppSelector } from '@/hooks/useRedux';
import { useEffect, useState } from 'react';

interface AuthWrapperProps {
  children: React.ReactNode;
}

export default function AuthWrapper({ children }: AuthWrapperProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const router = useRouter();
  const isAuthenticated = useAppSelector((state) => state.user.token);
  console.log(isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  return isAuthenticated && isClient ? (
    <section>{children}</section>
  ) : (
    <p>Loading...</p>
  );
}
