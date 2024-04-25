import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import Header from "./Header";
import Footer from "./Footer";
import HomepageModal from "./HomepageModal";

export default function Layout() {
  const [showModal, setShowModal] = React.useState(false);
  const [showPage, setShowPage] = React.useState(true);

  const isHomePage = window.location.pathname === "/";

  React.useEffect(() => {
    if (isHomePage) {
      setShowModal(true);
      setShowPage(false);
    }
  }, []);

  const closeModal = () => {
    setShowModal(false);
    setShowPage(true);
  };
  return (
    <div className={styles.splash}>
      <HomepageModal isOpen={showModal} onClose={closeModal}>
        <h2>WARNING!</h2>
        <p>
          This website is best viewed on desktops with screen sizes of 720
          pixels and above. You may run into layout issues if your screen size is below 720 pixels.
        </p>
      </HomepageModal>
      {showPage && (<div>
        <div className={styles.siteWrapper}>
          <Header />
          <main className={styles.contentWindow}>
            <Outlet />
          </main>

          <div className={styles.pageFooter}>
            <Footer />
          </div>
        </div>
      </div>)}
    </div>
  );
}
