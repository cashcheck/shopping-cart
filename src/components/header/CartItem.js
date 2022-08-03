import React from "react";
import QuantityIncrementer from "./QuantityIcrementer";

function CartItem(props) {
  const { item, increase, decrease } = props;

  return (
    <div className="cart-item">
      <img src={item.img} alt="product thumbnail" width="100px" />
      <div className="cart-item-info">
        <p>
          {item.name} - {item.size}
        </p>
        <p>
          <strong>{item.price}</strong>
        </p>
        <QuantityIncrementer
          item={item}
          increase={increase}
          decrease={decrease}
        />
      </div>
    </div>
  );
}

export default CartItem;
