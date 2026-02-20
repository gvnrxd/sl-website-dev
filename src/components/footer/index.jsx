import styles from "./index.module.css";

// Icons
import Logo from "@icons/slLogo2.svg";
import ClockIcon from "@icons/clock.jsx";
import PhoneIcon from "@icons/phone.jsx";
import MailIcon from "@icons/email.jsx";
import LocationIcon from "@icons/marker.jsx";

export default function Footer() {
  return (
    <>
      <footer>
        <div className={styles.ctnr}>
          <div className={styles.infoCtnr}>
            <div className={styles.icon} style={{ color: "var(--blue5)" }}>
              <ClockIcon size={40} />
              <span>Office Hours</span>
            </div>
            <div className={styles.content}>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        <div className={styles.ctnr}>
          <div className={styles.infoCtnr}>
            <div className={styles.icon} style={{ color: "var(--green)" }}>
              <PhoneIcon size={40} />
              <span>Phone </span>
            </div>
            <div className={styles.content}>
              <p>Main: (555) 123-4567</p>
              <p>FaxL (555) 123-4568</p>
            </div>
          </div>
        </div>

        <div className={styles.ctnr}>
          <div className={styles.infoCtnr}>
            <div className={styles.icon} style={{ color: "var(--blue5)" }}>
              <MailIcon size={40} />
              <span>Email</span>
            </div>
            <div className={styles.content}>
              <p>info@securelife.com</p>
              <p>support@securelife.com</p>
            </div>
          </div>
        </div>

        <div className={styles.ctnr}>
          <div className={styles.infoCtnr}>
            <div className={styles.icon} style={{ color: "var(--green)" }}>
              <LocationIcon size={40} />
              <span>Location</span>
            </div>
            <div className={styles.content}>
              <p>123 Insurance Way</p>
              <p>Suite 400</p>
              <p>West Palm Beach, Fl 33333</p>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.logoCtnr}>
            <img src={Logo} />
          </div>
          <div className={styles.cc}>
            <p>&copy;2026 SecureLife Insurance Brokers. All rights reserved.</p>
          </div>
        </div>
        <div className={styles.credits}>
          <p>
            Designed & Developed by{" "}
            <a
              href="https://www.palmbeachwebco.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Palm Beach Web Co.
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
