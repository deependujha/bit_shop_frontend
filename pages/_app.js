import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  const [usrAddr, setUsrAddr] = useState("");
  const [myContract, setMyContract] = useState("");
  const [logInStatus, setLogInStatus] = useState(false);

  return (
    <>
      <Head>
        <title>BIT-Shop</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar
        usrAddr={usrAddr}
        setUsrAddr={setUsrAddr}
        setMyContract={setMyContract}
        logInStatus={logInStatus}
        setLogInStatus={setLogInStatus}
      />
      <Component
        {...pageProps}
        logInStatus={logInStatus}
        setLogInStatus={setLogInStatus}
        usrAddr={usrAddr}
        setUsrAddr={setUsrAddr}
        setMyContract={setMyContract}
        myContract={myContract}
      />
    </>
  );
}

export default MyApp;
