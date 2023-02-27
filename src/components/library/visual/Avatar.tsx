import styles from "./Avatar.module.css";

interface AvatarProps {
    status: "Alive" | "Dead" | "unknown";
    image: string;
    character: string;
}

export default function Avatar({ status, image = "./src/assets/ricknmorty.png", character }: AvatarProps) {

    return (
        <img className={`${styles.avatar} ${styles[status]}`} src={image} alt={character} />
    );
}