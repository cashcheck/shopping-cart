import React from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import CartItem from "./CartItem";
import uniqid from "uniqid";

function Cart(props) {
  const { numItems, items, total, increase, decrease } = props;

  function expandCart(e) {
    e.currentTarget.nextSibling.classList.toggle("inactive");
  }

  return (
    <div>
      <div id="cart-container" onClick={expandCart}>
        <ShoppingBagIcon sx={{ color: "#434040" }} />
        <p id="cart-num-items">{numItems}</p>
      </div>
      <div id="expanded-cart" className="inactive">
        {items.map((item) => (
          <CartItem
            item={item}
            key={uniqid()}
            increase={increase}
            decrease={decrease}
          />
        ))}
        <div id="cart-total">
          <p>total: {total}</p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
