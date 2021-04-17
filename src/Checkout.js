import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { getCartTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ cart }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        {cart?.length === 0 ? (
          <div className="checkout__empty">
            <h1>Your Amazon Cart is empty.</h1>
            <p>
              Your Shopping Cart lives to serve. Give it purpose — fill it with
              groceries, clothing, household supplies, electronics, and more.
            </p>
          </div>
        ) : (
          <div className="checkout__card">
            <div className="checkout__cardHeader">
              <h2 className="checkout__title">Shopping Cart</h2>
              <p className="checkout__price">Price</p>
            </div>

            {cart.map((item) => (
              <CheckoutProduct
                className="checkout__product"
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
            <CurrencyFormat
              renderText={(value) => (
                <>
                  <p className="checkout__items">
                    Subtotal ({cart.length} items): <strong>{value}</strong>
                  </p>
                </>
              )}
              decimalScale={2}
              value={getCartTotal(cart)}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </div>
        )}
      </div>
      {cart?.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
