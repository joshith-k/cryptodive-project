import "./App.css";
import Faq from "./section/Faq/Faq.jsx";
import Footer from "./section/Footer/Footer.jsx";
import Header from "./section/Header/Header.jsx";
import Home from "./section/Home/Home.jsx";
import Learn from "./section/Learn/Learn.jsx";
import Market from "./section/Market/Market.jsx";
import Support from "./section/Support/Support.jsx";
import Trade from "./section/Trade/Trade.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Trade />
      <Market />
      <Learn />
      <Faq />
      <Support />
      <Footer />
    </div>
  );
}

export default App;
