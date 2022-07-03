import React from "react";
import Product from "../Product/Product";
import classes from "./Home.module.css";
function Home() {
  return (
    <div className={classes.home}>
      <div className={classes.homeContainer}>
        <img
          className={classes.homeImage}
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className={classes.homeRow}>
          <Product/>
          <Product/>
        </div>
        <div className={classes.homeRow}></div>
        <div className={classes.homeRow}></div>
      </div>
    </div>
  );
}

export default Home;
