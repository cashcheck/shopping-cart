import React from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import "./TopBar.css";

function TopBar(props) {
  return (
    <div id="top-bar">
      <div id="cart-container">
        <ShoppingBagIcon sx={{ color: "#434040" }} />
      </div>
    </div>
  );
}

export default TopBar;
