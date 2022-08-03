import React, { useState } from "react";
import image from "./images/1-og.jpg";

function ProductImages(props) {
  return (
    <div>
      <img src={image} width="650px" alt="originam mattress product" />
    </div>
  );
}

export default ProductImages;
