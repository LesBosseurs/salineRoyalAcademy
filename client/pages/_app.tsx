import '../styles/app.scss';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Layout from '../components/common/Layout';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const { pathname } = router;
  const excludeLayout =
    pathname === '/login' || pathname === '/register' || pathname === '/';

  if (excludeLayout) {
    return <Component {...pageProps} />;
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
