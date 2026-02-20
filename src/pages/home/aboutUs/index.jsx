import styles from "./index.module.css";

// Components
import StatCard from "@components/aboutUs/statCard/index.jsx";

// Images
import TeamImg from "@img/teamImg-1000w.jpg";

export default function AboutUs() {
  return (
    <>
      <div className="pageHeader2">
        <h2>About Us</h2>
        <p>
          With over 20 years of experience in the life insurance industry, we've
          helped thousands of families find the perfect coverage to protect
          their loved ones and secure their financial futures.
        </p>
        <br />
        <p>
          Our team of licensed insurance professionals is committed to providing
          personalized service, honest advice, and access to the best policies
          from top-rated carriers. We work for you, not the insurance companies.
        </p>
      </div>
      <div className={styles.content}>
        <div className={styles.statCtnr}>
          <StatCard number={20} title="Years Experience" color="var(--blue5)" />
          <StatCard
            number="10k"
            title="Families Protected"
            color="var(--green)"
          />
        </div>
        <div className={styles.imgCtnr}>
          <img
            src={TeamImg}
            alt="A business team talking to each other in a meeting"
          />
        </div>
      </div>
    </>
  );
}
