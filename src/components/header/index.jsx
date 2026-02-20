import styles from "./index.module.css";

// Icons
import Logo from "@icons/slLogo.svg";

export default function Header() {
  return (
    <>
      <header>
        <div className={styles.logoCtnr}>
          <img src={Logo} />
        </div>
        <a href="/">Contact Us</a>
      </header>
    </>
  );
}
