import styles from "./index.module.css";

// Components
import LinkButton from "@shared/linkButton/index.jsx";

// Sections
import OurMission from "./ourMission/index.jsx";
import OurProducts from "./ourProducts/index.jsx";
import AboutUs from "./aboutUs/index.jsx";
import ContactUs from "./contactUs/index.jsx";

// Images
import HeroImg from "@img/heroImg-800w.jpg";
import HeroImg2 from "@img/heroImg2-1000w.jpg";

// Icons
import CheckMark from "@icons/checkmark.jsx";

export default function HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Protect What Matters Most</h1>
          <p>
            Secure your families future with comprehensive life insurance
            solutions tailored to your unique needs. Expert guidance every step
            of the way.
          </p>
          <div className={styles.btnCtnr}>
            <LinkButton
              link="/error"
              desc="Get a Free Quote"
              bgColor="var(--blue2)"
              color="white"
            />
            <LinkButton
              link="/"
              desc="Learn More"
              bgColor="var(--white2)"
              color="var(--blue2)"
              border="1px solid var(--blue2)"
            />
          </div>
          <img src={HeroImg} />
        </div>
      </section>
      <div className={styles.heroExtra}>
        <div className={styles.checkMarkCtnr}>
          <div className={styles.checkMark}>
            <CheckMark size={25} color="var(--green)" />
            <span>No Hidden Fees</span>
          </div>
          <div className={styles.checkMark}>
            <CheckMark size={25} color="var(--green)" />
            <span>Fast Approval</span>
          </div>
        </div>
        <div className={styles.imgCtnr}>
          <img
            src={HeroImg2}
            alt="Family holding child while walking in sunset"
          />
        </div>
      </div>
      <div className={"banner"}>
        <h2>Helping customers live longer, healthier, better lives</h2>
      </div>
      <section>
        <OurMission />
      </section>
      <div className={"banner2"}>
        <h2>Your partner in building a secure financial future</h2>
      </div>
      <section>
        <OurProducts />
      </section>
      <section>
        <AboutUs />
      </section>
      <section>
        <ContactUs />
      </section>
    </>
  );
}
