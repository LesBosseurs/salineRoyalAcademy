import { useRouter } from 'next/router';
import { useAppSelector } from '@/hooks/useRedux';
import { useEffect } from 'react';

interface AuthWrapperProps {
  children: React.ReactNode;
}

const AuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
  const router = useRouter();
  const isAuthenticated = useAppSelector((state) => state.user.token);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return <p>Loading...</p>;
  }

  return <div>{children}</div>;
};

export default AuthWrapper;
