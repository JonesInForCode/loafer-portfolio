import React from "react";
import styles from "./Pages.module.css";
import AboutSniplet from "../components/AboutSniplet";

export default function Home() {
  return (
    <div className={styles.homeWrapper}>
      <div className={`${styles.homeCardMain} ${styles.article}`}>
        <section>
          <h2>This site is being revamped (updated 09/24/24)</h2>
          <section className={styles.homeArticle}>
            <article>
              This site is to serve as the hub for all my completed projects. It
              was built using React & Firebase Be sure to check back often for
              new features!
            </article>
            <section>
              <h2>Coming Soon...</h2>
              <article>
                <ul>
                  <li>Dynamic background</li>
                  <li>Animations</li>
                  <li>Backend Projects</li>
                </ul>
              </article>
            </section>
          </section>
        </section>
        <section className={`${styles.centerSection} ${styles.article}`}>
          <h1>Welcome!</h1>
          <p>Hello and welcome to my webpage, I originally made this website back in March of 2024
            as a quick access point to my frontend projects. I have since fallen in love with
            the Backend and find it is far more enjoyable for me. If you find yourself here and
            you're reading this, I am most likely still grinding skills on <a href="https://hyperskill.org/">Hyperskill.org</a></p>
          <p>
            I'm Nick Jones, Backend Developer and aspiring Full Stack Engineer.
            I began learning Software Engineering in October of 2022, exploring
            multiple disciplines from Java to Game Development, eventually
            settling into Web Development summer of 2023. I believe in taking a
            basic foundational approach to my web applications, fully planning
            out what I want to do and what problems could appear, plotting what
            needs to be done, and creating a functional framework before even
            touching the keyboard. This improves both the workflow and keeps
            things within the scope of what is being done, to avoid project
            bloat. I continue to build my skills across multiple platforms,
            already proficient in HTML, CSS, and Javascript, with a big focus on
            using React as my frontend library.
          </p>
        </section>
        <section className={`${styles.aboutSnip} ${styles.article}`}>
          <AboutSniplet />
        </section>
      </div>
    </div>
  );
}
