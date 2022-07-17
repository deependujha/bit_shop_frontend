import React from "react";
import Account from "../components/Account";

const account = ({ logInStatus, setLogInStatus, usrAddr, setUsrAddr,setMyContract }) => {
  return (
    <Account
      logInStatus={logInStatus}
      setLogInStatus={setLogInStatus}
      usrAddr={usrAddr}
      setUsrAddr={setUsrAddr}
      setMyContract={setMyContract}
    />
  );
};

export default account;
