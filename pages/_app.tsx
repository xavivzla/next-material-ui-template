import Head from "next/head";
import type { AppProps } from "next/app";

import AppContext from "../src/contenxts/AppContext";
import AppWrapper from "../src/components/AppWrapper";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Template material ui</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <AppContext>
        <AppWrapper>
          <Component {...pageProps} />
        </AppWrapper>
      </AppContext>
    </>
  );
}
export default MyApp;
