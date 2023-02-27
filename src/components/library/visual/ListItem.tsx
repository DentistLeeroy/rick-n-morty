import styles from "./ListItem.module.css";

interface ListItemProps {
    propName: string,
    propValue: string | Array<string>,
}

export default function ListItem({ propName, propValue }: ListItemProps) {

    return (
        <div className={styles.listItem}>
            <h3>{propName}</h3>
            <p>{propValue}</p>
        </div>
    );
}