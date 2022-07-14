import React from "react";
import Link from "next/link";
import Image from "next/image";
import style from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
      <Link href="/">
        <a className="navbar-brand" >
          BIT-shop
        </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle
    navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link href="/">
              <li className="nav-item ">
                <a className={`nav-link active ${style.myLink}`}>Home</a>
              </li>
            </Link>
            <Link href="/about">
              <li className="nav-item">
                <a className={`nav-link ${style.myLink}`}>About us</a>
              </li>
            </Link>
            <Link href="/myOrder">
              <li className="nav-item">
                <a className={`nav-link ${style.myLink}`}>My orders</a>
              </li>
            </Link>
            <Link href="/account">
              <li className="nav-item">
                <a className={`nav-link ${style.myLink}`}>Account</a>
              </li>
            </Link>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
