import styles from "./Card.module.css";

interface CardProps {
  image: string;
  title: string;
  subtitle: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export default function Card({onClick, image = "./src/assets/ricknmorty.png", title, subtitle}: CardProps) {

    return (
        <div className={styles.card} onClick={onClick}>
          <img src={image} alt={title} />
          <div>
            <h3>{title}</h3>
            <p>{subtitle}</p>
          </div>
        </div>
    );
}