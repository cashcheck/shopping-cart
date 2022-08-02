import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import logo from "./logodark.png";

function Nav() {
  return (
    <div id="nav-bar">
      <Link to="/">
        <img src={logo} height="50px" />
      </Link>
      <div id="nav-links">
        <Link to="/mattress" className="nav-link">
          <p>Original Mattress</p>
        </Link>
        <Link to="/pillow" className="nav-link">
          <p>Original Pillow</p>
        </Link>
        <Link to="/about-us" className="nav-link">
          <p>About us</p>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
