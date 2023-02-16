import styles from "./Header.module.css";
import Navigation from "./Navigation";
import Logo from "../../../assets/logo-black.png"
import { Link } from "react-router-dom";

export default function Header() {

    return (
        <header className={styles.header}>
            <Link to="/" >
                <img src={Logo} alt="Logo" />
            </Link>
            <Navigation />
        </header>
    );
}