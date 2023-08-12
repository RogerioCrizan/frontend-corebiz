import React, { useEffect, useState } from "react";

import type { IProduct } from "../typings/products";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useMinicart } from "../../../hooks/useMinicart";

function Product({ image, title, rating, price, id }: IProduct) {
  const { minicart, setMinicart } = useMinicart();
  const [added, setAdded] = useState(false);

  const totalStars = 5;
  const activeStars = rating.rate;

  useEffect(() => {
    const getLocalStorage = localStorage.getItem("minicart");

    if (getLocalStorage) {
      setMinicart(JSON.parse(getLocalStorage));
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("minicart", JSON.stringify(minicart));
    }, 200);

    const currentMinicart = minicart.productId.filter((item) => {
      return item.id === id;
    });

    if (currentMinicart.length !== 0) {
      setAdded(true);
    }
  }, [minicart]);

  const addToCart = () => {
    setMinicart({ productId: [...minicart.productId, { id: id }] });
    setAdded(true);
  };

  const removeToCart = () => {
    const itemRemoved = minicart.productId.filter((item) => {
      return item.id !== id;
    });

    setMinicart({ productId: itemRemoved });
    setAdded(false);
  };

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
        {added ? (
          <button className="shelf__product-removeItem" onClick={removeToCart}>
            Remover
          </button>
        ) : (
          <button className="shelf__product-addItem" onClick={addToCart}>
            Comprar
          </button>
        )}
      </div>
    </div>
  );
}

export default Product;
