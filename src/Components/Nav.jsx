import React from "react";
import logo from "./images/logo.png";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <nav class="navbar fixed-top p-0 ps-5 pe-5">
        <Link to="/" class="navbar-brand">
          <img src={logo} />
        </Link>
        <Link to="/" class="navbar-brand royal">
          Royal College of Engineering and Technology
        </Link>
        <Link to="/contact-us" class="navbar-brand">
          Contact Us
        </Link>
        <Link to="/about-us" class="navbar-brand">
          About Us
        </Link>
        <Link to="/gallery" class="navbar-brand">
          Gallery
        </Link>
      </nav>
    </>
  );
};

export default Nav;
