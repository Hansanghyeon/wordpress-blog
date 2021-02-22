import App from 'next/app';
import { AppProps, AppContext } from 'next/app';
import Providers from '@/Provider';
import wrapper from '@store/configureStore';

interface MyAppProps extends AppProps {}
function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
}

export default wrapper.withRedux(MyApp);

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
MyApp.getInitialProps = async (appContext: AppContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};
