import styles from "./CardWithoutImage.module.css";

interface CardWithoutImageProps {
  title: string;
  subtitle: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export default function CardWithoutImage({onClick, title, subtitle}: CardWithoutImageProps) {

    return (
        <div className={styles.cardWithoutImage} onClick={onClick}>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
    );
}