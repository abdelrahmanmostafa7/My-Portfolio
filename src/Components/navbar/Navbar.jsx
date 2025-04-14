import React from "react";
import "./Navbar.scss";
import logo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <div className="navContainer">
      <div className="logo">
        <img src={logo} alt="Logo" className="logoImg"/>
      </div>
      <div className="items">
        <span>Home</span>
        <span>About</span>
        <span>Skills</span>
        <span>Experience</span>
        <span>Contact</span>
      </div>
    </div>
  );
};

export default Navbar;
