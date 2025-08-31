import React from "react";
import css from "./Support.module.css";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import telegram from "../../assets/telgram.svg";

const Support = () => (
  <div className={css.supportSection}>
    <div className={css.leftSide}>
      <h2 className={css.heading}>Get It On The Crypto Action</h2>
      <p className={css.description}>
        Provide easy access to customer support through chatbots or live chat
        features.
      </p>
      <div className={css.socialIcons}>
        <img src={facebook} alt="" srcset="" className={css.icon} />
        <img src={instagram} alt="" srcset="" className={css.icon} />
        <img src={telegram} alt="" srcset="" className={css.icon} />
      </div>
    </div>
    <div className={css.rightSide}>
      <div className={css.inputGroup}>
        <label className={css.label} htmlFor="email">
          Email ID
        </label>
        <input
          className={css.input}
          type="email"
          id="email"
          placeholder="Enter your email"
        />
      </div>
      <div className={css.inputGroup} style={{ marginTop: "59px" }}>
        <label className={css.label} htmlFor="topic">
          Topic
        </label>
        <input
          className={css.input}
          type="text"
          id="topic"
          placeholder="Enter your topic"
        />
      </div>
      <button className={css.sendBtn}>Send Message</button>
    </div>
  </div>
);

export default Support;
