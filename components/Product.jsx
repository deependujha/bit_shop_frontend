import React from "react";
import style from "../styles/Product.module.css";
import Image from "next/image";
import Link from "next/link";

const Product = ({ type, prd, myContract }) => {
  const clk = () => {
    if (type === "buy") {
      myContract
        .purchaseItem(prd.product_id, prd.sellerAddress, prd.price)
        .then((tx) => {
          console.log("transaction occured : ", tx.hash);
          return tx
            .wait()
            .then(() => {
              alert("Order placed successfully successfully");
            })
            .catch((err) => {
              alert("You don't have sufficient balance", err.message);
              console.log(`Error occurred: ${e}`);
            });
        })
        .catch((err) => {
          alert("You don't have sufficient balance");
        });
    } else {
    }
    console.log(`button clicked`);
  };
  const secretKey = async () => {
    myContract
      .checkDeliveryKey(prd.product_id)
      .then((val) => {
        alert(`Your delivery key is: ${val}`);
      })
      .catch((e) => {
        alert(`Error occurred: ${e}`);
      });
  };
  return (
    <div className={style.myContainer}>
      <div
        style={{
          width: "350px",
          height: "300px",
          position: "relative",
          backgroundColor: "#e6e6e6",
          borderRadius: "15px",
        }}
      >
        <Image
          src={`http://159.223.186.223:3200${prd.image}`}
          layout={"fill"}
          objectFit={"contain"}
          alt="myproduct"
        />
      </div>

      <p style={{ textAlign: "center" }}>{prd.product_name}</p>

      <p>
        price: <b>{prd.price} MDR</b>
        <button
          className={`btn btn-success ms-4 `}
          onClick={async () => {
            secretKey();
          }}
        >
          secret Key
        </button>
        <button
          className={`btn ${
            type == "buy" ? "btn-primary" : "btn-danger"
          }  ms-3`}
          style={{}}
          onClick={clk}
        >
          {type == "buy" ? `Buy Now` : `Cancel`}
        </button>
      </p>
    </div>
  );
};

export default Product;
