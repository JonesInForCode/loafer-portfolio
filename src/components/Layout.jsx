import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './Layout.module.css'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  console.log(styles)
  return (
    <div className={styles.siteWrapper}>
      <Header />
      <Outlet className={styles.contentWindow} />
      <Footer className={styles.pageFooter}/>
    </div>
  )
}