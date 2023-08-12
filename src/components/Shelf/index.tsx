import { useEffect, useState } from "react";
import Product from "./components/Product";
import { IProduct } from "./typings/products";

import "./styles/shelf.scss";

function Shelf() {
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((resp) => resp.json())
      .then((json) => setProducts(json));
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log(products);

  return (
    <section className="shelf">
      <div className="shelf__wrapper">
        {products.map((item: IProduct) => {
          return (
            <Product
              image={item.image}
              title={item.title}
              rating={item.rating}
              price={item.price}
              id={item.id}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Shelf;
