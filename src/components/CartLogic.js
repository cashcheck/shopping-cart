import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import Header from "./Header";
import Mattress from "./pages/Mattress";
import { Routes, Route } from "react-router-dom";

function CartLogic() {
  const [items, setItems] = useState([]);
  const [numItems, setNumItems] = useState(0);
  const [total, setTotal] = useState(0);

  function addToCart(item) {
    let newItems = items;
    let newItem = item;
    for (let i = 0; i < newItems.length; i++) {
      if (
        newItems[i].name === newItem.name &&
        newItems[i].size === newItem.size
      ) {
        newItem = newItems[i];
        newItem.quantity += 1;
        newItems[i] = newItem;
        updateCart(newItems);
        return;
      }
    }
    newItem.quantity = 1;
    updateCart([...items, newItem]);
  }

  function updateCart(cartItems) {
    setItems(cartItems);
    setTotal(getTotal(cartItems));
    setNumItems(getNumItems(cartItems));
  }

  function getTotal(cartItems) {
    let newTotal = 0;
    cartItems.forEach((i) => (newTotal += i.price * i.quantity));
    return newTotal;
  }

  function getNumItems(cartItems) {
    let newNumItems = 0;
    cartItems.forEach((i) => (newNumItems += i.quantity));
    return newNumItems;
  }

  function increaseQuanity(item) {
    let newItems = items;
    let newItem = item;
    for (let i = 0; i < newItems.length; i++) {
      if (
        newItems[i].name === newItem.name &&
        newItems[i].size === newItem.size
      ) {
        newItem = newItems[i];
        newItem.quantity += 1;
        newItems[i] = newItem;
        updateCart(newItems);
        return;
      }
    }
  }

  function decreaseQuantity(item) {
    let newItems = items;
    let newItem = item;
    for (let i = 0; i < newItems.length; i++) {
      if (
        newItems[i].name === newItem.name &&
        newItems[i].size === newItem.size
      ) {
        newItem = newItems[i];
        newItem.quantity -= 1;
        if (newItem.quantity === 0) {
          newItems.splice(i, 1);
          updateCart(newItems);
          return;
        }
        newItems[i] = newItem;
        updateCart(newItems);
        return;
      }
    }
  }

  return (
    <div>
      <Header
        numItems={numItems}
        items={items}
        total={total}
        decrease={decreaseQuantity}
        increase={increaseQuanity}
      />
      <Routes>
        <Route path="/mattress" element={<Mattress addToCart={addToCart} />} />
        <Route path="/" element={<Home />} />s
      </Routes>
    </div>
  );
}

export default CartLogic;
