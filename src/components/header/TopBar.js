import React from "react";
import Cart from "./Cart";
import "./TopBar.css";

function TopBar(props) {
  const { numItems, items, total, increase, decrease } = props;
  return (
    <div id="top-bar">
      <Cart
        numItems={numItems}
        items={items}
        total={total}
        increase={increase}
        decrease={decrease}
      />
    </div>
  );
}

export default TopBar;
