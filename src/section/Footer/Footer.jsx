import React from "react";
import css from "./Footer.module.css";
import googlePlay from "../../assets/googleplay.svg";
import appStore from "../../assets/appstore.png";
import { FaAmazon, FaWindows, FaTimes } from "react-icons/fa";

const Footer = () => (
  <footer className={css.footer}>
    <div className={css.footerLinks}>
      <div className={css.linkGroup}>
        <div className={css.linkTitle}>Quick Link</div>
        <a href="#">About Us</a>
        <a href="#">Feature</a>
        <a href="#">Career</a>
        <a href="#">Contact Us</a>
      </div>
      <div className={css.linkGroup}>
        <div className={css.linkTitle}>Help</div>
        <a href="#">Customer Support</a>
        <a href="#">Terms</a>
        <a href="#">Privacy</a>
        <a href="#">FAQs</a>
      </div>
      <div className={css.linkGroup}>
        <div className={css.linkTitle}>Others</div>
        <a href="#">Start Treding</a>
        <a href="#">Earn Free Crypto</a>
        <a href="#">Crypto Wallete</a>
        <a href="#">Payment Option</a>
      </div>
      <div className={css.downloadGroup}>
        <div className={css.linkTitle}>Download App</div>
        <a href="#" className={css.downloadBtn}>
          <img src={googlePlay} alt="Google Play" />
        </a>
        <a href="#" className={css.downloadBtn}>
          <img src={appStore} alt="App Store" />
        </a>
      </div>
    </div>
    <hr className={css.divider} />
    <div className={css.footerBottom}>
      <span className={css.copyright}>
        © Copyright 2024, all right reserve by cryptodive
      </span>
      <div className={css.footerIcons}>
        <FaAmazon />
        <FaWindows />
        <FaTimes />
      </div>
    </div>
  </footer>
);

export default Footer;
