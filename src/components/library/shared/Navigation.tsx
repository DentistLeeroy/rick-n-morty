import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

interface NavProps {
}

export default function Navigation({}: NavProps) {

    return (
        <nav>
            <Link to="/" >Charecters</Link>
            <Link to="/locations" >Locations</Link>
            <Link to="/episodes" >Episodes</Link>
        </nav>
    );
}