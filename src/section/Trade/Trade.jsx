import React, { useState } from "react";
import css from "./Trade.module.css";

const mainCurrencies = [
  { symbol: "INR", name: "Indian Rupee" },
  { symbol: "AED", name: "UAE Dirham" },
  { symbol: "USD", name: "US Dollar" },
  { symbol: "EUR", name: "Euro" },
];

const assets = [
  { symbol: "BTC", name: "Bitcoin" },
  { symbol: "ETH", name: "Ethereum" },
  { symbol: "USDT", name: "Tether" },
  { symbol: "GOLD", name: "Gold" },
];

const Trade = () => {
  const [tab, setTab] = useState("buy");
  const [mainCurrency, setMainCurrency] = useState(mainCurrencies[0].symbol);
  const [asset, setAsset] = useState(assets[0].symbol);
  const [amount, setAmount] = useState("");
  const [exchangeAmount, setExchangeAmount] = useState("");

  return (
    <div className={css.tradeBox}>
      <div className={css.tabs}>
        <span
          className={`${css.tab} ${tab === "buy" ? css.activeTab : ""}`}
          onClick={() => setTab("buy")}
        >
          Buy
        </span>
        <span
          className={`${css.tab} ${tab === "sell" ? css.activeTab : ""}`}
          onClick={() => setTab("sell")}
        >
          Sell
        </span>
      </div>
      <div className={css.inputsRow}>
        <div className={css.inputGroup}>
          <input
            type="number"
            className={css.input}
            placeholder="I Will Spend"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <select
            className={css.select}
            value={mainCurrency}
            onChange={(e) => setMainCurrency(e.target.value)}
          >
            {mainCurrencies.map((c) => (
              <option key={c.symbol} value={c.symbol}>
                {c.symbol} - {c.name}
              </option>
            ))}
          </select>
          <span className={css.selectIcon}>▼</span>
        </div>
        <div className={css.exchangeIconDiv}>
          <span className={css.exchangeIcon}>⇄</span>
        </div>
        <div className={css.inputGroup}>
          <input
            type="number"
            className={css.input}
            placeholder="I Will Recieve"
            value={exchangeAmount}
            onChange={(e) => setExchangeAmount(e.target.value)}
          />
          <select
            className={css.select}
            value={asset}
            onChange={(e) => setAsset(e.target.value)}
          >
            {assets.map((ex) => (
              <option key={ex.symbol} value={ex.symbol}>
                {ex.symbol}
              </option>
            ))}
          </select>
          <span className={css.selectIcon}>▼</span>
        </div>
        <button className={css.actionBtn}>
          {tab === "buy" ? "Buy Crypto" : "Sell Crypto"}
        </button>
      </div>
    </div>
  );
};

export default Trade;
