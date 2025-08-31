import React from "react";
import css from "./Cards.module.css";

const SmallCard = ({ icon, label }) => (
  <div className={css.smallCard}>
    <div className={css.iconContainer}>
      <img src={icon} alt={label} className={css.icon} />
    </div>
    <div className={css.label}>{label}</div>
  </div>
);

export default SmallCard;
