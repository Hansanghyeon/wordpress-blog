import React from "react";
import "~web/faust.config";
import { FaustProvider } from "@faustjs/next";
import { client } from "~web/client";
import type { AppProps } from "next/app";
import "normalize.css/normalize.css";
import "~web/scss/main.scss";
import "pretendard/dist/web/static/pretendard.css";

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
