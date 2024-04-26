import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  const useWindowSize = () => {
    const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
      const handleResize = () => setScreenWidth(window.innerWidth);

      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }, [])

    return screenWidth;
  }

  const screenWidth = useWindowSize();

  return (
    <div className={styles.splash}>
      <div>
        <div className={styles.siteWrapper}>
          <Header />
          <main className={styles.contentWindow}>
            <Outlet />
          </main>
          <div className={styles.pageFooter}>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}