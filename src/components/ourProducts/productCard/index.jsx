import styles from "./index.module.css";
import { Link } from "react-router-dom";

export default function ProductCard({ icon, title, desc, color }) {
  const Icon = icon;
  return (
    <>
      <div className={styles.card} style={{ backgroundColor: color }}>
        <div className={styles.cardContent}>
          <div className={styles.icon}>
            {Icon && (
              <div className={styles.icon} style={{ color }}>
                <Icon size={35} />
              </div>
            )}
          </div>
          <div className={styles.desc}>
            <h3>{title}</h3>
            <p>{desc}</p>
            <Link style={{ color }} to="/">
              Learn More <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
