import React from "react";
import ProductImages from "./mattress/ProductImages";
import ProductDescription from "./mattress/ProductDescription";
import "./mattress/Mattress.css";

function Mattress(props) {
  const { addToCart } = props;
  return (
    <div className="product-info-grid">
      <ProductImages />
      <ProductDescription addToCart={addToCart} />
    </div>
  );
}

export default Mattress;
