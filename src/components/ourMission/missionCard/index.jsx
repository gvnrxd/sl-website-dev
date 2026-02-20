import styles from "./index.module.css";

export default function MissionCard({ title, desc, icon, bg, fill }) {
  const Icon = icon;
  return (
    <>
      <div className={styles.card}>
        <div
          className={styles.icon}
          style={{ backgroundColor: bg, color: fill }}
        >
          <Icon size={35} />
        </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      </div>
    </>
  );
}
