import React, { useState } from "react";
import classes from "./Header.module.css";
import SearchIcon from "@mui/icons-material/Search";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { Link } from "react-router-dom";
import {useStateValue} from "../store/StateProvider";
function Header() {
  const [{ cart }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const changeHandler = (event) => {
    setInput(event.target.value);
  };
  return (
    <div className={classes.header}>
      <Link to="/">
        <img
          className={classes.headerLogo}
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      <div className={classes.headerSearch}>
        <input
          value={input}
          onChange={changeHandler}
          className={classes.headerSearchInput}
          type="text"
        />
        <SearchIcon className={classes.headerSearchIcon} />
      </div>

      <div className={classes.headerNav}>
        <div className={classes.headerOption}>
          <span className={classes.headerOptionLineOne}>Hello Guest</span>
          <span className={classes.headerOptionLineTwo}>Sign In</span>
        </div>
        <div className={classes.headerOption}>
          <span className={classes.headerOptionLineOne}>Returns</span>
          <span className={classes.headerOptionLineTwo}>& Orders</span>
        </div>
        <div className={classes.headerOption}>
          <span className={classes.headerOptionLineOne}>Your</span>
          <span className={classes.headerOptionLineTwo}>Prime</span>
        </div>

        <Link to="/checkout">
          <div className={classes.headerOptionBasket}>
            <LocalGroceryStoreIcon />
            <span
              className={`${classes.headerOptionBasketCount} ${classes.headerOptionLineTwo}`}
            >
              {cart?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
