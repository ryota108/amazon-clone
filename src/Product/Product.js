import React from "react";
import classes from "./Product.module.css";

function Product({title,image,rating,price}) {
  return (
    <div className={classes.product}>
      <div className={classes.productInfo}>
        <p>{title}</p>
        <p className={classes.productPrice}>
          <small>￥</small>
          <strong>{price}</strong>
        </p>
        <div className={classes.productRating}>
          {Array(rating).fill().map((_,i)=>(
          <p>🌟</p>
          ))}

        </div>
      </div>
      <img
        src={image}
        alt=""
      />

      <button>Add to Cart</button>
    </div>
  );
}

export default Product;
