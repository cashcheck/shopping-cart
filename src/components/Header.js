import React from "react";
import Nav from "./header/Nav";
import TopBar from "./header/TopBar";

function Header(props) {
  const { numItems, items, total, increase, decrease } = props;
  return (
    <div>
      <TopBar
        numItems={numItems}
        items={items}
        total={total}
        increase={increase}
        decrease={decrease}
      />
      <Nav />
    </div>
  );
}

export default Header;
