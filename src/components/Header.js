import React from "react";
import Nav from "./header/Nav";
import TopBar from "./header/TopBar";

function Header(props) {
  const { numItems, items } = props;
  return (
    <div>
      <TopBar numItems={numItems} items={items} />
      <Nav />
    </div>
  );
}

export default Header;
