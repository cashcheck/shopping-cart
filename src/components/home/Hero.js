import React from "react";
import Button from "@mui/material/Button";
import "./Hero.css";

function Hero() {
  return (
    <div>
      <div id="heroText">
        <h3>Original Mattress</h3>
        <p>
          100 sleep day trial • 10 limited warranty • nationwide free delivery
        </p>
        <button>from 6.890.000</button>
      </div>
      <div id="heroContainer">
        <div className="heroChild is-hidden-mobile-only" id="simon"></div>
        <div className="heroChild is-hidden-mobile-only" id="separator"></div>
        <div className="heroChild is-hidden-mobile-only" id="nisa"></div>
      </div>
    </div>
  );
}

export default Hero;
