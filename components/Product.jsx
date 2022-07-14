import React from "react";
import style from "../styles/Product.module.css";
import Image from "next/image";
import Link from "next/link";

const Product = () => {
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
          src="/mac.png"
          layout={"fill"}
          objectFit={"contain"}
          alt="myproduct"
        />
      </div>

      <p style={{ textAlign: "center" }}>Macbook</p>

      <p>
        price: <b>400 MDR</b>
        <button
          className="btn btn-primary"
          style={{ float: "right" }}
          onClick={clk}
        >
          Buy Now
        </button>
      </p>
    </div>
  );
};

export default Product;