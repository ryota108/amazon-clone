import React from "react";
import classes from "./Product.module.css";

function Product() {
  return (
    <div className={classes.product}>
      <div className={classes.productInfo}>
        <p>The lean startup</p>
        <p className={classes.productPrice}>
          <small>￥</small>
          <strong>1999</strong>
        </p>
        <div className={classes.productRating}>
          <p>★</p>
          {/* <p>★</p>
          <p>★</p> */}
        </div>
      </div>
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
        alt=""
      />

      <button>Add to Cart</button>
    </div>
  );
}

export default Product;
