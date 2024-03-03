import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './Layout.module.css'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className={styles.siteWrapper}>
      <Header />

      <main className={styles.contentWindow}>
        <Outlet />
      </main>

      <div className={styles.pageFooter}>
        <Footer />
      </div>
    </div>
  )
}