import styles from "./index.module.css";
import { Link } from "react-router-dom";

export default function LinkButton({ desc, link, bgColor, color, border }) {
  return (
    <>
      <a
        className={styles.link}
        href={link}
        style={{ background: bgColor, color: color, border }}
      >
        {desc}
      </a>
    </>
  );
}
