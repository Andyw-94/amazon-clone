import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, rating, image }) {
  const [{}, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <img src={image} alt="" />
      <div className="product__info">
        <p>{title}</p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>

      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;
