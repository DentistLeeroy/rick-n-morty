import styles from "./Header.module.css";
import Navigation from "./Navigation";
import Logo from "../../../assets/logo-black.png"

export default function Header() {

    return (
        <header className={styles.header}>
            <img src={Logo} alt="Logo" />
            <Navigation />
        </header>
    );
}