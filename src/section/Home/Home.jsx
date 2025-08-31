import React from "react";
import css from "./Home.module.css";
import coin from "../../assets/coins.svg";
import coin2 from "../../assets/coins2.svg";
import coin3 from "../../assets/coins3.svg";
import coin4 from "../../assets/coins4.svg";

const Home = () => {
  return (
    <div className={css.home}>
      <div>
        <div className={css.yellowFadeCircle}>
          <img src={coin} alt="" />
        </div>
        <div className={css.redFadeCircle}>
          <img src={coin2} alt="" />
        </div>
        <span className={css.homeHeaderTopText}>
          Secure & Intuitive <br />
          Crypto Trading
        </span>
      </div>
      <div className={css.homeHeaderBottom}>
        <div className={css.purpleFadeCircle}>
          <img src={coin3} alt="" />
        </div>
        <div className={css.greenFadeCircle}>
          <img src={coin4} alt="" />
        </div>
        <span className={css.headerBottomText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod <br />
          tempor incididunt ut labore et dolore magna aliqua.
        </span>
        div
      </div>
      <div className={css.bottomButtons}>
        <button className={css.bottomButtonsBtn}>Get Started</button>
        <div className={css.bottomButtonsSecBtn}>
          <span>Start Trading</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
