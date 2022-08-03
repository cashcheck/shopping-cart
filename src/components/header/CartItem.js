import React from "react";

function CartItem(props) {
  return (
    <div>
      <h6>{props.name}</h6>
      <p>{props.price}</p>
    </div>
  );
}
