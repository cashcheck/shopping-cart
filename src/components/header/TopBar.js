import React from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Cart from "./Cart";
import "./TopBar.css";

function TopBar(props) {
  const { numItems, items } = props;
  return (
    <div id="top-bar">
      <Cart numItems={numItems} items={items} />
    </div>
  );
}

export default TopBar;
