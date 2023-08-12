import type { IProduct } from "../typings/products";

function Product({ image, title, rating, price, id }: IProduct) {
  return (
    <div className="shelf__product">
      <img src={image} alt="" />
      <div className="shelf__product-info">
        <p>{title}</p>
        <p>{price}</p>
      </div>
    </div>
  );
}

export default Product;
