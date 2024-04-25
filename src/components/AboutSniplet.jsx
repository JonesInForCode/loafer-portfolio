import { Fragment } from "react";
import styles from "../pages/Pages.module.css";

const AboutSniplet = () => {
  return (
    <Fragment>
      <h3>About Me</h3>
      <img
        className={styles.avatar}
        src="/images/1582828948459.jpg"
        alt="an image of Nick Jones"
      />
      <h4>Frontend Developer React | HTML | CSS | JavaScript</h4>
    </Fragment>
  );
};

export default AboutSniplet;
