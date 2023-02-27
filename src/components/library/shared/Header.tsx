import styles from "./Header.module.css";
import Logo from "../../../assets/logo-black.png"
import { Link, useLocation } from "react-router-dom";

export default function Header() {

    const location = useLocation();

    return (
        <header className={styles.header}>
            <Link to="/" >
                <img src={Logo} alt="Logo" />
            </Link>
            <nav className={styles.navigation}>
                <Link className={location.pathname == "/" ? styles.active : ""} to="/" >Characters</Link>
                <Link className={location.pathname.includes("/locations") ? styles.active : ""} to="/locations" >Locations</Link>
                <Link className={location.pathname.includes("/episodes") ? styles.active : ""} to="/episodes" >Episodes</Link>
            </nav>
        </header>
    );
}