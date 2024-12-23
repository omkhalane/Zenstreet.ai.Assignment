
import { useRouter } from 'next/router';
import '../styles/globals.css';
export default function MyApp({ Component, pageProps }) {
  const { basePath } = useRouter();

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}