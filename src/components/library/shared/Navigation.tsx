import styles from "./Nav.module.css";
import { Link, useLocation } from "react-router-dom";

export default function Navigation() {

    const location = useLocation();

    return (
        <nav className={styles.navigation}>
            <Link className={location.pathname == "/" ? styles.active : ""} to="/" >Charecters</Link>
            <Link className={location.pathname.includes("/locations") ? styles.active : ""} to="/locations" >Locations</Link>
            <Link className={location.pathname.includes("/episodes") ? styles.active : ""} to="/episodes" >Episodes</Link>
        </nav>
    );
}