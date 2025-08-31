import css from "./Header.module.css";
import dots from "../../assets/dots.svg";

const Header = () => {
  return (
    <header className={css.navbar}>
      <div className={css.navbarLeft}>
        <span className={css.siteFirstName}>Crypto</span>
        <span className={css.siteLastName}>Dive</span>
      </div>
      <nav className={css.navbarCenter}>
        <a href="#home" className={css.navLink}>
          Home
        </a>
        <a href="#trade" className={css.navLink}>
          Trade
        </a>
        <a href="#markets" className={css.navLink}>
          Market
        </a>
        <a href="#learn" className={css.navLink}>
          Learn
        </a>
        <a href="#support" className={css.navLink}>
          Support
        </a>
      </nav>
      <div className={css.navbarRight}>
        <button className={css.signupBtn}>Sign Up</button>
        <div className={css.moreOptions}>
          <img src={dots} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
