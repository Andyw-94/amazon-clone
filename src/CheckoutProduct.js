import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <div className="checkoutProduct__container">
        <img className="checkoutProduct__image" src={image} alt="" />

        <div className="checkoutProduct__infoContainer">
          <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">{title}</p>

            <div className="checkoutProduct__rating">
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <p>⭐</p>
                ))}
            </div>

            <div className="checkoutProduct__gift" type="checkbox">
              <input type="checkbox" /> This is a gift
            </div>

            <button onClick={removeFromBasket}>Remove from cart</button>
          </div>

          <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
