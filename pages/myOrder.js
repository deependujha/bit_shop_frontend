import React from "react";
import { useRouter } from "next/router";
import MyOrder from "../components/MyOrder";

const myOrder = ({ usrAddr, usrDetails }) => {
  const router = useRouter();
  if (usrDetails.name==undefined) {
    return <div className="container my-5">
    <h3>Please login first.</h3></div>
  } else {
    return <MyOrder usrAddr={usrAddr} usrDetails={usrDetails}/>;
  }
};

export default myOrder;
