import React from "react";
import Product from "./Product";

const MyOrder = () => {
  return (
    <div className="container my-3">
      <h3>Your orders are on the way: 🛒</h3>
      <Product type="cancel" />
      <Product type="cancel" />
      <Product type="cancel" />
      <Product type="cancel" />
    </div>
  );
};

export default MyOrder;
