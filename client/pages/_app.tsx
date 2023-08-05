import Layout from '@/components/common/Layout';
import '@/styles/app.scss';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import { store } from '@/store';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const { pathname } = router;
  const excludeLayout =
    pathname === '/login' || pathname === '/register' || pathname === '/';

  if (excludeLayout) {
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
