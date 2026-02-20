import styles from "./index.module.css";

export default function StatCard({ number, title, color }) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.number}>
          <h3 style={{ color }}>{number}+</h3>
        </div>
        <div className={styles.desc}>
          <p>{title}</p>
        </div>
      </div>
    </>
  );
}
