import "~web/faust.config";
import { FaustProvider } from "@faustjs/next";
import "normalize.css/normalize.css";
import React from "react";
import "~web/scss/main.scss";
import { client } from "~web/client";
import type { AppProps } from "next/app";

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
