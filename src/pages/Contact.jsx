import React from "react";
import styles from "./Pages.module.css";

export default function Contact() {
  return (
    <React.Fragment>
      <div className={styles.contactCard}>
        <h1 className={styles.contactHeader}>Contact Me</h1>
        <h3>Contact Information</h3>
        <section>
          <ul>
            <li>
              <a href="mailto:themightyloafer.self098@passinbox.com">
                themightyloafer.self098@passinbox.com
              </a>
            </li>
            <li>
              <a href="https://www.github.com/jonesinforcode">Github</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/nicolas-jones-0930b6177/">
                LinkedIn
              </a>
            </li>
          </ul>
        </section>
      </div>
      <div className={styles.contactForm}></div>
    </React.Fragment>
  );
}
