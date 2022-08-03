import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

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
        className="quantity-button-decrease quantity-button"
      >
        <RemoveIcon sx={{ textJustify: "center" }} />
      </button>
      <p className="item-quantity">{item.quantity}</p>
      <button
        onClick={handleIncrease}
        className="quantity-button-increase quantity-button"
      >
        <AddIcon sx={{ textJustify: "center" }} />
      </button>
    </div>
  );
}

export default QuantityIncrementer;
