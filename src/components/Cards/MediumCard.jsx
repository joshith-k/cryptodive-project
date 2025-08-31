import React from "react";
import css from "./Cards.module.css";

const MediumCard = ({ heading, desc, buttonText = "Learn More" }) => (
  <div className={css.mediumCard}>
    <div className={css.heading}>{heading}</div>
    <div className={css.desc}>{desc}</div>
    <button className={css.button}>{buttonText}</button>
  </div>
);

export default MediumCard;
