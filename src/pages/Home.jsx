import React from "react";
import styles from "./Pages.module.css";
import AboutSniplet from "../components/AboutSniplet";

export default function Home() {
  return (
    <div className={`${styles.homeCardMain} ${styles.article}`}>
      <section>
        <h2>This site is under construction</h2>
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
      <section className={`${styles.centerSection} ${styles.article}`}>
        <h1>Welcome!</h1>
        <p>
          I'm Nick Jones, Frontend Developer and aspiring Full Stack Engineer. I
          began learning Software Engineering in October of 2022, exploring
          multiple disciplines from Java to Game Development, eventually
          settling into Web Development summer of 2023. I believe in taking a
          basic foundational approach to my web applications, fully planning out
          what I want to do and what problems could appear, plotting what needs
          to be done, and creating a functional framework before even touching
          the keyboard. This improves both the workflow and keeps things within
          the scope of what is being done, to avoid project bloat. I continue to
          build my skills across multiple platforms, already proficient in HTML,
          CSS, and Javascript, with a big focus on using React as my frontend
          library.
        </p>
      </section>
      <section className={`${styles.aboutSnip} ${styles.article}`}>
        <AboutSniplet />
      </section>
    </div>
  );
}
