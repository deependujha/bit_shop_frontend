import React, { useState, useEffect } from "react";
import NewUserForm from "./NewUserForm";

const UserDetails = ({
  logInStatus,
  setLogInStatus,
  usrAddr,
  setUsrAddr,
  setMyContract,
  setUserName,
}) => {
  let details = {};
  useEffect(() => {
    if (usrAddr != "") {
      fetch(`http://159.223.186.223:3200/account/${usrAddr}`).then(
        (response) => {
          details = response.json();
        }
      );
    }
  }, [usrAddr]);
  const [balance, setBalance] = useState("");
  const [hide, setHide] = useState(true);
  const fetchBalance = () => {
    if (hide) {
      setBalance("2000 MDR/-");
      setHide(false);
    } else {
      setBalance("");
      setHide(true);
    }
  };
  if (logInStatus) {
    // fetcher(usrAddr);
    return (
      <div>
        <p>
          <b>Name:</b>
          <span className="mx-3 text-primary">{details.name}</span>
        </p>
        <p>
          <b>Phone:</b>{" "}
          <span className="mx-3 text-primary">{details.phone_no}</span>
        </p>
        <p>
          <b>Email:</b>{" "}
          <span className="mx-3 text-primary">{details.email}</span>
        </p>
        <p>
          <b>Delivery address:</b>{" "}
          <span className="mx-3 text-primary">{details.delivery_address}</span>
        </p>
        <button className="btn btn-outline-primary" onClick={fetchBalance}>
          {hide == true ? `Check balance` : `Hide balance`}
        </button>
        <b className="mx-5 text-success">{balance}</b>
      </div>
    );
  } else {
    return (
      <NewUserForm
        usrAddr={usrAddr}
        setUsrAddr={setUsrAddr}
        setMyContract={setMyContract}
        setUserName={setUserName}
      />
    );
  }
};

export default UserDetails;
