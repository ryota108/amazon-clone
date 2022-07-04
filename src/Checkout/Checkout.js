import React from "react";
import classes from "./Checkout.module.css";
import Subtotal from "./Subtotal";
function Checkout() {
  return (
    <div className={classes.checkout}>
      <div className={classes.checkoutLeft}>
        <img
          className={classes.checkoutAd}
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
          <h2 className={classes.checkoutTitle}>
            Your shopping Cart
          </h2>
          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */}
        </div>
      </div>
      <div className={classes.checkoutRight}>
        <Subtotal/>
      </div>
    </div>
  );
}

export default Checkout;
