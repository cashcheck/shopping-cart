import React, { useState, useEffect } from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

function Cart(props) {
  const { numItems, items } = props;

  function expandCart(e) {
    e.target.nextSibling.toggle("inactive");
  }

  return (
    <div>
      <div id="cart-container" onClick={expandCart}>
        <ShoppingBagIcon sx={{ color: "#434040" }} />
        <p id="cart-num-items">{numItems}</p>
      </div>
      <div id="expanded-cart" class="inactive"></div>
    </div>
  );
}

export default Cart;
