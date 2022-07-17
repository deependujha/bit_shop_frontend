import React from "react";
import style from "../styles/Product.module.css";
import Image from "next/image";
import Link from "next/link";

const Product = ({ type, prd }) => {
  const clk = () => {
    console.log(`button clicked`);
  };
  return (
    <div className={style.myContainer}>
      <div
        style={{
          width: "300px",
          height: "300px",
          position: "relative",
          backgroundColor: "#e6e6e6",
          borderRadius: "15px",
        }}
      >
        <Image
          src={`http:127.0.0.1:5000/${prd.image}`}
          layout={"fill"}
          objectFit={"contain"}
          alt="myproduct"
        />
      </div>

      <p style={{ textAlign: "center" }}>{prd.product_name}</p>

      <p>
        price: <b>{prd.price} MDR</b>
        <button
          className={`btn ${type == "buy" ? "btn-primary" : "btn-danger"} mx-2`}
          style={{ float: "right" }}
          onClick={clk}
        >
          {type == "buy" ? `Buy Now` : `Cancel`}
        </button>
      </p>
    </div>
  );
};

export default Product;
