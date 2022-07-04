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
          <Product
            id="123423"
            title="2021 AirPods Pro Apple純正MagSafe充電ケース付き"
            image="https://m.media-amazon.com/images/I/615ekapl+pL._AC_SX679_.jpg"
            price={35000}
            rating={4}
          />
          <Product
            id="345212"
            title="Webを支える技術 -HTTP、URI、HTML、そしてREST (WEB+DB PRESS plus)"
            price={2827}
            image="https://images-fe.ssl-images-amazon.com/images/I/51OSBZvAxGL._SY291_BO1,204,203,200_QL40_ML2_.jpg"
            rating={3}
          />
        </div>
        <div className={classes.homeRow}>
          <Product
            id="17823"
            title="【純正品】ワイヤレスコントローラー(DUALSHOCK 4) ジェット・ブラック (CUH-ZCT2J)"
            price={9600}
            image="https://images-fe.ssl-images-amazon.com/images/I/81bh-rXW8tL.__AC_SY300_SX300_QL70_ML2_.jpg"
            rating={5}
          />
          <Product
            id="189273"
            title="ブルックサイド ダークチョコレート アサイー&ブルーベリー 200g"
            price={1020}
            image="https://m.media-amazon.com/images/I/71cRj38UpML._AC_SX522_.jpg"
            rating={3}
          />
          <Product
            id="4357628"
            title="【Amazon.co.jp限定】Logicool G ロジクール G ゲーミングヘッドセット G433BK PS5 PS4 PC Switch Xbox 有線 Dolby 7.1ch 3.5mm usb 軽量 ノイズキャンセリング 単一性 着脱式 マイク付き 国内正規品"
            price={6490}
            image="https://m.media-amazon.com/images/I/71L3pSNPLCL._AC_SX522_.jpg"
            rating={4}
          />
        </div>
        <div className={classes.homeRow}>
          <Product
            id="456380"
            title="【Amazon.co.jp限定】HUAWEI MateView GT デュアルスピーカーサウンドバー 34インチ ウルトラワイド曲面ゲーミングモニター 3年保証付き HDR 165Hzリフレッシュレート 3440x1440 WQHD タッチボリュームコントロール 360°デュアルマイク 高さ/傾き調整機能【日本正規代理店】"
            price={65801}
            image="https://m.media-amazon.com/images/I/61KFmcQ1Q4S._AC_SX522_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
