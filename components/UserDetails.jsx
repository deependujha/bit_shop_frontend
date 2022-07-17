import React, { useState } from "react";
import NewUserForm from "./NewUserForm";

const UserDetails = ({ logInStatus, setLogInStatus, usrAddr, setUsrAddr,setMyContract }) => {
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
    return (
      <div>
        <p>
          <b>Name:</b>
          <span className="mx-3 text-primary">Deependu Jha</span>
        </p>
        <p>
          <b>Phone:</b> <span className="mx-3 text-primary">6203545085</span>
        </p>
        <p>
          <b>Email:</b>{" "}
          <span className="mx-3 text-primary">deependujha21@gmail.com</span>
        </p>
        <p>
          <b>Delivery address:</b>{" "}
          <span className="mx-3 text-primary">
            Motihari, Bihar, India-845401
          </span>
        </p>
        <button className="btn btn-outline-primary" onClick={fetchBalance}>
          {hide == true ? `Check balance` : `Hide balance`}
        </button>
        <b className="mx-5 text-success">{balance}</b>
      </div>
    );
  } else {
    return <NewUserForm usrAddr={usrAddr} setUsrAddr={setUsrAddr} setMyContract={setMyContract}/>;
  }
};

export default UserDetails;
