import React from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import Mattress from "./components/Mattress";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/mattress" element={<Mattress />} />
        <Route path="/" element={<Home />} />s
      </Routes>
    </BrowserRouter>
  );
}

export default App;
