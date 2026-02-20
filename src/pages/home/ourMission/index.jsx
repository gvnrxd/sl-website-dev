import styles from "./index.module.css";

// Components
import MissionCard from "@components/ourMission/missionCard/index.jsx";

// Icons
import ShieldIcon from "@icons/shield.jsx";
import HeartIcon from "@icons/heart.jsx";
import MedalIcon from "@icons/medal.jsx";

export default function OurMission() {
  return (
    <>
      <div className="pageHeader">
        <h2>Our Mission</h2>
        <p>
          To provide peace of mind through personalized life insurance solutions
          that protect families and secure futures. We believe everyone deserves
          access to quality coverage and expert guidance.
        </p>
      </div>
      <div className={styles.content}>
        <MissionCard
          icon={HeartIcon}
          bg="var(--blue5)"
          fill="white"
          title="Customer First"
          desc="Your needs and goals are at the heart of everything we do"
        />
        <MissionCard
          icon={ShieldIcon}
          bg="var(--green)"
          fill="white"
          title="Trusted Protection"
          desc="Reliable coverage from top-rated insurance providers"
        />
        <MissionCard
          icon={MedalIcon}
          bg="var(--blue5)"
          fill="white"
          title="Expert Guidance"
          desc="Experienced brokers dedicated to finding your perfect plan"
        />
      </div>
    </>
  );
}
