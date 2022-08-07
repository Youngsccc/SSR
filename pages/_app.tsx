import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';
import { StoreProvider } from '../store';

function MyApp({ Component, pageProps }: AppProps) {
  const user = {
    id: '1231',
  };
  return (
    <StoreProvider initialValue={{ user }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StoreProvider>
  );
}

export default MyApp;
