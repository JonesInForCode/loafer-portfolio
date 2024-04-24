import React from "react";
import styles from "./Pages.module.css"

export default function Home() {
  return (
    <div className={styles.homeCardMain}>
      <h1 className={styles.homeCardMainHeader}>Welcome to my homepage!</h1>
      <p>This area is under construction</p>
      <br />
      <p>This site is to serve as the hub for all my completed projects</p>
      <p>It was built using React & Firebase</p>
      <p>Be sure to check back often for new features!</p>
    </div>
  );
}
