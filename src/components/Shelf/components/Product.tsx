import type { IProduct } from "../typings/products";

function Product({ image, title, rating, price, id }: IProduct) {
  return (
    <div className="shelf__product">
      <div className="shelf__product-image">
        <img src={image} alt="" />
      </div>
      <div className="shelf__product-info">
        <div className="shelf__product-nameAndRating">
          <p className="shelf__product-name">{title}</p>
        </div>
        <p className="shelf__product-price">
          por R${price.toFixed(2).replace(".", ",")}
        </p>
      </div>
    </div>
  );
}

export default Product;
