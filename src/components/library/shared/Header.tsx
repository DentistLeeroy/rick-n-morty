import styles from "./Header.module.css";
import Navigation from "./Navigation";
import Logo from "../../../assets/logo-black.png"

interface HeaderProps {
}

export default function Header({}: HeaderProps) {

    return (
        <header>
            <img src={Logo} alt="Logo" />
            <Navigation />
        </header>
    );
}