import styles from "./index.module.css";

export default function ContactUs() {
  return (
    <>
      <div className="pageHeader">
        <h2>Contact Us</h2>
        <p>Request a free, no-obligation consultation today.</p>
      </div>
      <div className={styles.content}>
        <form className={styles.form}>
          <label>
            Full Name:
            <input
              type="text"
              autoComplete="name"
              pattern="[A-Za-z\s]+"
              placeholder="John Doe"
            ></input>
          </label>
          <label>
            Email:
            <input
              type="email"
              autoComplete="email"
              placeholder="john@example.com"
            ></input>
          </label>
          <label>
            Phone:
            <input
              type="tel"
              autoComplete="tel"
              pattern="[0-9\-\+\(\)\s]+"
              placeholder="(123) 456-7891"
            ></input>
          </label>
          <label>
            Message:
            <textarea
              resize="vertical"
              autoComplete="off"
              rows="3"
              placeholder="How can we help you?"
            ></textarea>
          </label>
          <button
            type="submit"
            onClick={() => {
              alert("You have submitted your form");
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
