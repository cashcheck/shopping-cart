import React from "react";
import CartLogic from "./components/CartLogic";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <CartLogic />
    </BrowserRouter>
  );
}

export default App;
