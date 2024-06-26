import React from "react";
import styles from "./Pages.module.css";

export default function Contact() {
  return (
    <React.Fragment>
      <div className={styles.contactCard}>
        <h1 className={styles.contactHeader}>Contact me</h1>
        <h2>This area is under construction</h2>
        <h3>Contact Informaion</h3>
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
        <p>This is the contact page of my website.</p>
      </div>
      <div className={styles.contactForm}></div>
    </React.Fragment>
  );
}
