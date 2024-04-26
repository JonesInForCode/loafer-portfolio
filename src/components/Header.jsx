import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import HamburgerIcon from "./HamburgerIcon";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMenuOpen(window.innerWidth > 499);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = window.innerWidth <= 499;

  return (
    <header>
      {isMobile ? (
        <>
          <HamburgerIcon
            isOpen={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
          <nav className={`${styles.navbar} ${isMenuOpen ? styles.open : ""}`}>
            <ul>
              <li>
                <Link to="/" className={styles.homelink}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="proj-link">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="contact-link">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/about" className="about-link">
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </>
      ) : (
        <nav className={styles.navbar}>
          <Link to="/" className={styles.homelink}>
            Home
          </Link>
          <ul>
            <li>
              <Link to="/projects" className="proj-link">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="contact-link">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/about" className="about-link">
                About
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
