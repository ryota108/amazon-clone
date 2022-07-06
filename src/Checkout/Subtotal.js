import React from "react";
import classes from "./Subtotal.module.css";
import CurrencyFormat from "react-currency-format";
import {useStateValue} from "../store/StateProvider";
import { getCartTotal } from "../store/reducer";

function Subtotal() {
  const [{ cart }, dispatch] = useStateValue();
  return (
    <div className={classes.subtotal}>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart.length} items):
              <strong>{value}</strong>
            </p>
            <small className={classes.subtotalGift}>
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"￥"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
