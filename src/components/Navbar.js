import React, { useState } from "react";
import Logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="Logo" /> 
        <div className="hiddenLinks">
          <Link to="/" onClick={toggleNavbar}> Home </Link>
          <Link to="/menu" onClick={toggleNavbar}> Menu </Link>
          <Link to="/about" onClick={toggleNavbar}> About </Link>
          <Link to="/contact" onClick={toggleNavbar}> Contact </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <button onClick={toggleNavbar}>
          Toggle Navbar
        </button>
      </div>
    </div>
  );
}

export default Navbar;
