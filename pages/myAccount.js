import React from "react";
import Account from "../components/Account";

const account = ({
  logInStatus,
  setLogInStatus,
  usrAddr,
  setUsrAddr,
  setMyContract,
  setUserName,
  usrDetails,
  setUsrDetails,
}) => {
  return (
    <Account
      logInStatus={logInStatus}
      setLogInStatus={setLogInStatus}
      usrAddr={usrAddr}
      setUsrAddr={setUsrAddr}
      setMyContract={setMyContract}
      setUserName={setUserName}
      usrDetails={usrDetails}
      setUsrDetails={setUsrDetails}
    />
  );
};

export default account;
