import React, { useEffect, useState } from "react";
import Product from "./components/Product";
import { IProduct } from "./typings/products";
import Glider from "react-glider";
import "glider-js/glider.min.css";
import ContentLoader from "react-content-loader";

import "./styles/shelf.scss";

function Shelf() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((resp) => resp.json())
      .then((json) => setProducts(json))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    setLoading(true);
    getProducts();
  }, []);

  return (
    <section className="shelf">
      <div className="shelf__wrapper">
        <h2>Mais Vendidos</h2>
        {loading ? (
          <ContentLoader
            speed={2}
            width={window.innerWidth <= 768 ? 350 : 1080}
            height={288}
            viewBox={window.innerWidth <= 768 ? "0 0 350 288" : "0 0 1080 288"}
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="0" y="0" rx="3" ry="3" width="100%" height="100%" />
          </ContentLoader>
        ) : window.outerWidth < 959 ? (
          <Glider
            draggable
            hasDots
            slidesToShow={2}
            slidesToScroll={2}
            itemWidth={140}
          >
            {products.map((item: IProduct, index) => {
              return (
                <Product
                  image={item.image}
                  title={item.title}
                  rating={item.rating}
                  price={item.price}
                  id={item.id}
                  key={index}
                />
              );
            })}
          </Glider>
        ) : (
          <Glider hasArrows slidesToShow={4} slidesToScroll={4} itemWidth={216}>
            {products.map((item: IProduct, index) => {
              return (
                <Product
                  image={item.image}
                  title={item.title}
                  rating={item.rating}
                  price={item.price}
                  id={item.id}
                  key={index}
                />
              );
            })}
          </Glider>
        )}
      </div>
    </section>
  );
}

export default Shelf;
