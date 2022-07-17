import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";

const MyOrder = ({ usrAddr, usrDetails }) => {
  const [myOrders, setMyOrders] = useState([]);
  useEffect(() => {
    axios
      .get(`http://159.223.186.223:3200/order/${usrAddr}`)
      .then((response) => {
        // console.log(response.data.name);
        setMyOrders(response.data);
      })
      .catch((e) => {
        alert(`an error occurred: ${e}`);
      });
  }, [usrAddr]);
  return (
    <div className="container my-3">
      <h3>Your orders are on the way: 🛒</h3>
      {myOrders.length == 0 ? (
        <div className="my-3">
          Seems like you have not ordered anything yet. 🥺
        </div>
      ) : (
        <div className="my-3">
          {myOrders.map((item) => {
            return (
              <span key={item._id}>
                <Product type="cancel" prd={item} />
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MyOrder;
