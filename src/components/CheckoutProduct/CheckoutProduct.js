import React from "react";
import "./CheckoutProduct.css";
import { useDataLayerValue } from "../../DataLayer";

const CheckoutProduct = ({ id, image, title, rating, price, hideButton }) => {

  const [{ basket }, dispatch] = useDataLayerValue();

  const removeFromBasket = () => {
      dispatch({
          type:"REMOVE_FROM_BASKET",
          id: id,
      })
  }
  return (
    <div className="checkoutProduct">

      <img className="checkoutProduct__image" src={image} alt="" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checoutProduct__rating">
        {Array(rating).fill().map((_,i) => (
            <p>⭐</p>
          ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from basket</button>
        )}
      </div>
     
    </div>
  );
};

export default CheckoutProduct;
