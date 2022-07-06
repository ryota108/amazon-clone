import React from "react";
import { useStateValue } from "../store/StateProvider";
import classes from "./CheckoutProduct.module.css";
function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ cart }, dispatch] = useStateValue();
  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };
  return (
    <div className={classes.checkoutProduct}>
      <img className={classes.checkoutProductImage} src={image} alt={title} />
      <div className={classes.checkoutProductInfo}>
        <p className={classes.checkoutProductTitle}>{title}</p>
        <p className={classes.checkoutProductPrice}>
          <small>￥</small>
          <strong>{price}</strong>
        </p>
        <div className={classes.checkoutProductRating}>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        <button onClick={removeFromCart}>Remove from Cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
