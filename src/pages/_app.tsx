import "../styles/index.css";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default App;
