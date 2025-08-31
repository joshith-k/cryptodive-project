import React from "react";
import css from "./Learn.module.css";
import icon1 from "../../assets/learn1.svg";
import icon2 from "../../assets/learn2.svg";
import icon3 from "../../assets/learn3.svg";
import icon4 from "../../assets/learn4.svg";
import Heading from "../../components/Texts/Heading";
import SubHeading from "../../components/Texts/SubHeading";
import SmallCard from "../../components/Cards/SmallCard";
import MediumCard from "../../components/Cards/MediumCard";

const topCards = [
  { icon: icon1, label: "Learn Crypto" },
  { icon: icon2, label: "Learn Earn" },
  { icon: icon3, label: "How To Tred" },
  { icon: icon4, label: "Build Portfolio" },
];

const learnCards = [
  {
    heading: "Let's learn How crypto Currency Work?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit - Time data",
  },
  {
    heading: "Let's learn How crypto Currency Work?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit - Time data",
  },
  {
    heading: "Let's learn How crypto Currency Work?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit - Time data",
  },
  {
    heading: "Let's learn How crypto Currency Work?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit - Time data",
  },
  {
    heading: "Let's learn How crypto Currency Work?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit - Time data",
  },
  {
    heading: "Let's learn How crypto Currency Work?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit - Time data",
  },
  {
    heading: "Let's learn How crypto Currency Work?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit - Time data",
  },
  {
    heading: "Let's learn How crypto Currency Work?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit - Time data",
  },
  {
    heading: "Let's learn How crypto Currency Work?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit - Time data",
  },
];

const Learn = () => (
  <div className={css.learnSection}>
    <Heading text="Learn Crypto" />
    <SubHeading text="Let's Know How Crypto Works" />
    <div className={css.description}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </div>
    <div className={css.topCards}>
      {topCards.map((card) => (
        <SmallCard key={card.label} icon={card.icon} label={card.label} />
      ))}
    </div>
    <div className={css.learnCardsGrid}>
      {learnCards.map((card, idx) => (
        <MediumCard key={idx} heading={card.heading} desc={card.desc} />
      ))}
    </div>
  </div>
);

export default Learn;
