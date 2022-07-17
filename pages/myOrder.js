import React from "react";
import { useRouter } from "next/router";
import MyOrder from "../components/MyOrder";

const myOrder = ({ usrAddr }) => {
  const router = useRouter();
  if (usrAddr == "") {
    router.push("/myAccount");
  } else {
    return <MyOrder />;
  }
};

export default myOrder;
