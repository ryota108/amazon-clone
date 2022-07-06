import React from "react";
import { useStateValue } from "../store/StateProvider";
import classes from "./Product.module.css";

function Product({ id, title, image, rating, price }) {
  
  const [{ cart }, dispatch] = useStateValue();

  console.log(cart)

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
    <div className={classes.product}>
      <div className={classes.productInfo}>
        <p>{title}</p>
        <p className={classes.productPrice}>
          <small>￥</small>
          <strong>{price}</strong>
        </p>
        <div className={classes.productRating}>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />

      <button 
      onClick={addToCart}
      >Add to Cart</button>
    </div>
  );
}

export default Product;
