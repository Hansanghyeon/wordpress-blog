import '~web/faust.config';
import { FaustProvider } from '@faustjs/next';
import { client } from '~web/client';
import type { AppProps } from 'next/app';
import 'pretendard/dist/web/static/pretendard.css';
import 'd2coding/d2coding-full.css';
import 'd2coding/d2coding-subset.css';
import 'd2coding/d2coding-ligature-full.css';
import 'd2coding/d2coding-ligature-subset.css';
import '~web/scss/app.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <FaustProvider client={client} pageProps={pageProps}>
        {/* @ts-ignore */}
        <Component {...pageProps} />
      </FaustProvider>
    </>
  );
}
