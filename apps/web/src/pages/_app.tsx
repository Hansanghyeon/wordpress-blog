import type { AppProps } from "next/app";
import "~web/styles/style.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
  // @ts-ignore
  return <Component {...pageProps} />;
}
