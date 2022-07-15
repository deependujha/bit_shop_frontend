import React from "react";
import Image from "next/image";
import UserDetails from "./UserDetails";

const Account = () => {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-sm">
          <UserDetails />
        </div>
        <div
          className="col-sm"
          style={{
            // backgroundColor: "#e6e6e6",
            height: "50vh",
            width: "300px",
            borderRadius: "15px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Image
            src="/user.jpeg"
            alt="user profile"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Account;
