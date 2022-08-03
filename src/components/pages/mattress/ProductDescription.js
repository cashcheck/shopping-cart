import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import image from "./images/1-og.jpg";
import uniqid from "uniqid";

function ProductDescription(props) {
  const { addToCart } = props;

  const variants = [
    {
      name: "Original Mattress",
      size: "Twin: 120cm x 200cm",
      price: 5890000,
      img: image,
    },
    {
      name: "Original Mattress",
      size: "Full: 140cm x 200cm",
      price: 6690000,
      img: image,
    },
    {
      name: "Original Mattress",
      size: "Queen: 160cm x 200cm",
      price: 7490000,
      img: image,
    },
    {
      name: "Original Mattress",
      size: "King: 180cm x 200cm",
      price: 8290000,
      img: image,
    },
    {
      name: "Original Mattress",
      size: "Square King: 200cm x 200cm",
      price: 9090000,
      img: image,
    },
  ];

  const [variant, setVariant] = useState(variants[0]);

  function handleChange(e) {
    setVariant(variants.filter((v) => v.size === e.target.value)[0]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    addToCart(variant);
  }
  return (
    <div className="product-description">
      <h1>Original Mattress</h1>
      <h4 className="product-price">{variant.price}đ</h4>
      <h4>Inside the Original</h4>
      <p>2 layer construction</p>
      <p>
        Integer volutpat nulla ac justo scelerisque malesuada. Morbi ultrices
        tortor sit amet mauris tempor convallis quis et risus.
      </p>
      <p>
        Pellentesque consequat, lorem et dapibus bibendum, dui eros vehicula
        nisl, porta aliquet urna mi porta eros. Vestibulum eleifend ultrices
        elit id condimentum. Etiam iaculis mi id urna eleifend convallis.
      </p>
      <form onSubmit={handleSubmit}>
        <FormControl
          sx={{
            marginTop: "25px",
            marginBottom: "25px",
          }}
        >
          <InputLabel id="mattress-size-label">Size</InputLabel>
          <Select
            labelId="mattress-size-label"
            id="mattress-size-select"
            value={variant.size}
            label="Size"
            onChange={handleChange}
            sx={{ width: "400px", backgroundColor: "white" }}
          >
            {variants.map((v) => (
              <MenuItem value={v.size} key={uniqid()}>
                {v.size}
              </MenuItem>
            ))}
          </Select>
          <button className="add-to-cart-button">Add to cart</button>
        </FormControl>
      </form>
    </div>
  );
}

export default ProductDescription;
