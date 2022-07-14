import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import React, { useEffect } from "react";
// import Script from "next/script";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <>
      <Head>
        <title>BIT-Shop</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
