import { AppProps } from 'next/app';
import Providers from '@/Provider';

function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
}

export default App;
