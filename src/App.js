import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import Mattress from "./components/Mattress";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [numItems, setNumItems] = useState(items.length);
  const [total, setTotal] = useState(0);

  function addToCart(item) {
    setItems([...items, item]);
    console.log(total);
  }

  function getTotal() {
    let newTotal = 0;
    items.forEach((i) => (newTotal += i.price));
    return newTotal;
  }

  useEffect(() => {
    setNumItems(items.length);
    setTotal(getTotal());
  }, [items]);

  return (
    <BrowserRouter>
      <Header numItems={numItems} items={items} />
      <Routes>
        <Route path="/mattress" element={<Mattress addToCart={addToCart} />} />
        <Route path="/" element={<Home />} />s
      </Routes>
    </BrowserRouter>
  );
}

export default App;
