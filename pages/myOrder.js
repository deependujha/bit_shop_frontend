import React from "react";
import { useRouter } from "next/router";
import MyOrder from "../components/MyOrder";

const myOrder = ({ usrAddr, usrDetails }) => {
  const router = useRouter();
  if (usrDetails.name==undefined) {
    router.push("/myAccount");
  } else {
    return <MyOrder usrAddr={usrAddr} usrDetails={usrDetails}/>;
  }
};

export default myOrder;
