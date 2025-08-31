import css from "./Market.module.css";
import btcIcon from "../../assets/bitcoin.svg";
import ethIcon from "../../assets/etherium.svg";
import solIcon from "../../assets/solana.svg";
import dogeIcon from "../../assets/doge.svg";
import yellow from "../../assets/yellow.svg";
import purple from "../../assets/purple.svg";
import green from "../../assets/green.svg";
import red from "../../assets/red.svg";
import Heading from "../../components/Texts/Heading";
import SubHeading from "../../components/Texts/SubHeading";

const marketData = [
  {
    icon: btcIcon,
    name: "Bitcoin",
    currency: "INR",
    change: "+14.04%",
    changeType: "positive",
    price: "49,645",
    chartClass: yellow,
    bgColor: "#FEE71526",
  },
  {
    icon: ethIcon,
    name: "Ethereum",
    currency: "INR",
    change: "+43.04%",
    changeType: "positive",
    price: "36,675",
    chartClass: purple,
    bgColor: "#5928AF26",
  },
  {
    icon: solIcon,
    name: "Solana",
    currency: "INR",
    change: "-14.23%",
    changeType: "negative",
    price: "1,456",
    chartClass: green,
    bgColor: "#33875A26",
  },
  {
    icon: dogeIcon,
    name: "Doge",
    currency: "INR",
    change: "+17.06%",
    changeType: "positive",
    price: "41,645",
    chartClass: red,
    bgColor: "#CC313D26",
  },
];

const Market = () => (
  <div className={css.marketContainer}>
    <Heading text="Trade Crypto" />
    <SubHeading text="Crypto Market Trade And Metrics" />
    <div className={css.marketTable}>
      {marketData.map((item) => (
        <div className={css.marketRow} key={item.name}>
          <div className={css.marketCoin}>
            <div
              className={css.coinIconCircle}
              style={{ backgroundColor: item.bgColor }}
            >
              <img src={item.icon} alt={item.name} className={css.coinIcon} />
            </div>
            <div>
              <div className={css.coinName}>{item.name}</div>
              <div className={css.coinCurrency}>{item.currency}</div>
            </div>
          </div>

          <div className={css.marketChange}>
            <div>Change</div>
            <div
              className={
                item.changeType === "positive" ? css.positive : css.negative
              }
            >
              {item.change}
            </div>
          </div>
          <div className={css.marketPrice}>
            <div className={css.price}>Price</div>
            <div>
              {item.price} {item.currency.toLowerCase()}
            </div>
          </div>
          <div className={css.marketChart}>
            <div>Chart</div>
            <div className={css.marketChartImage}>
              <img src={item.chartClass} alt="" srcset="" />
            </div>
          </div>
          <div>
            <button className={css.tradeBtn}>Trade</button>
          </div>
        </div>
      ))}
    </div>
    <button className={css.viewOtherBtn}>View Other Crypto</button>
  </div>
);

export default Market;
