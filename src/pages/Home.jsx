import React from "react";
import styles from "./Pages.module.css";
import AboutSniplet from "../components/AboutSniplet";

export default function Home() {
  return (
    <div className={styles.homeCardMain}>
      <section>
        <h2>This area is under construction</h2>
        <section className={styles.homeArticle}>
          <article>
            This site is to serve as the hub for all my completed projects. It
            was built using React & Firebase Be sure to check back often for new
            features!
          </article>
          <section>
            <h2>Coming Soon...</h2>
            <article>
              <ul>
                <li>Mobile Obtimization</li>
                <li>Animations</li>
                <li>Modals</li>
              </ul>
            </article>
          </section>
        </section>
      </section>
      <section className={styles.aboutSnip}>
        <AboutSniplet />
      </section>
    </div>
  );
}
