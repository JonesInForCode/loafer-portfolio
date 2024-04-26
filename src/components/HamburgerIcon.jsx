import styles from "./Header.module.css"
const HamburgerIcon = ({ isOpen, onClick }) => (
    <div
        className={`${styles.hamburgerIcon} ${isOpen ? styles.open : ""}`}
        onClick={onClick}>
            <span></span>
            <span></span>
            <span></span>
        </div>
)

export default HamburgerIcon