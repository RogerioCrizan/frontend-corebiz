import React from "react";

import type { IProduct } from "../typings/products";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

function Product({ image, title, rating, price, id }: IProduct) {
  const totalStars = 5;
  const activeStars = rating.rate;

  return (
    <div className="shelf__product">
      <div className="shelf__product-image">
        <img src={image} alt="" />
      </div>
      <div className="shelf__product-info">
        <div className="shelf__product-nameAndRating">
          <p className="shelf__product-name">{title}</p>
          <Box className="shelf__product-rating">
            {[...new Array(totalStars)].map((arr, index) => {
              return index < activeStars ? <StarIcon /> : <StarBorderIcon />;
            })}
          </Box>
        </div>
        <p className="shelf__product-price">
          por R${price.toFixed(2).replace(".", ",")}
        </p>
        <button>Comprar</button>
      </div>
    </div>
  );
}

export default Product;
