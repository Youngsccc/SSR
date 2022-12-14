import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';
import { StoreProvider } from '../store';
import '../styles/globals.css';

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
