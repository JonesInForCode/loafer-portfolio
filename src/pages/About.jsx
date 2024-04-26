import React from "react";
import styles from "./Pages.module.css";

export default function About() {
  return (
    <div className={styles.aboutPage}>
      <h1 className={styles.aboutHeader}>About Me</h1>
      <div className={styles.aboutContent}>
        <img src="/public/images/jonesinforcodeabtpg.jpg"/>
        <h2>Hi, I'm Nick Jones</h2>
        <h3>Frontend Software Developer</h3>
        <h3>React| JavaScript| HTML| CSS</h3>
        <p>Hello and welcome to my site!</p>
      </div>
    </div>
  );
}
