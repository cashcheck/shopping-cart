import React from "react";

function QuantityIncrementer(props) {
  const { item, increase, decrease } = props;

  function handleIncrease(e) {
    increase(item);
  }

  function handleDecrease(e) {
    decrease(item);
  }

  return (
    <div className="quantity-incrementer">
      <button
        onClick={handleDecrease}
        className="quanity-button-decrease quantity-button"
      >
        -
      </button>
      <p>{item.quantity}</p>
      <button
        onClick={handleIncrease}
        className="quanity-button-increase quantity-button"
      >
        +
      </button>
    </div>
  );
}

export default QuantityIncrementer;
