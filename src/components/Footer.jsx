import React from "react";
import styles from "./Layout.module.css"

export default function Footer() {
  return(
  <footer className={styles.pageFooter} style={{display: 'flex', justifyContent: 'space-between'}}>

      <p className={styles.pageFooterContent}>&copy; {new Date().getFullYear()} <a href="https://github.com/TheMightyLoafer">Nicolas Jones</a></p>
      <p className={styles.pageFooterContent}><span>Created using React + Vite + Firebase</span></p>
  </footer>
  )
    }