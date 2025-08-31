import React from "react";
import css from "./Faq.module.css";
import Heading from "../../components/Texts/Heading";
import SubHeading from "../../components/Texts/SubHeading";

const faqs = [
  {
    question: "What is cryptocurrency?",
    answer:
      "Cryptocurrency is a digital currency secured by cryptography and operating on decentralized networks.",
  },
  {
    question: "How do I start investing in cryptocurrency?",
    answer:
      "Choose a reliable exchange, create an account, complete verification, deposit funds, and buy cryptocurrencies.",
  },
  {
    question: "What is a blockchain?",
    answer:
      "A blockchain is a distributed ledger that records transactions across a network of computers.",
  },
  {
    question: "How do I keep my cryptocurrency secure?",
    answer:
      "Use strong passwords, enable two-factor authentication, and store your crypto in reputable wallets.",
  },
  {
    question: "What is a cryptocurrency wallet?",
    answer:
      "A cryptocurrency wallet is a digital tool for storing, sending, and receiving cryptocurrencies.",
  },
  {
    question: "What are the most popular cryptocurrencies?",
    answer:
      "Popular cryptocurrencies include Bitcoin, Ethereum, Binance Coin, Cardano, and Solana.",
  },
];

const Faq = () => {
  return (
    <div className={css.faqSection}>
      <Heading text="FAQ" />
      <SubHeading text="Frequently Asked Questions" />
      <div className={css.subHeading}>
        Follow design trends and continually update your skills by
        <br />
        learning new tools and techniques.
      </div>
      <div className={css.faqRows}>
        <div className={css.faqRow}>
          {faqs.slice(0, 2).map((faq) => (
            <div className={css.faqCol} key={faq.question}>
              <div className={css.faqQuestion}>{faq.question}</div>
              <div className={css.faqAnswer}>{faq.answer}</div>
              <div className={css.underline}></div>
            </div>
          ))}
        </div>
        <div className={css.faqRow}>
          {faqs.slice(2, 4).map((faq) => (
            <div className={css.faqCol} key={faq.question}>
              <div className={css.faqQuestion}>{faq.question}</div>
              <div className={css.faqAnswer}>{faq.answer}</div>
              <div className={css.underline}></div>
            </div>
          ))}
        </div>
        <div className={css.faqRow}>
          {faqs.slice(4, 6).map((faq) => (
            <div className={css.faqCol} key={faq.question}>
              <div className={css.faqQuestion}>{faq.question}</div>
              <div className={css.faqAnswer}>{faq.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
