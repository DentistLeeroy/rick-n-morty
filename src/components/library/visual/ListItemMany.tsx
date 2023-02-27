import styles from "./ListItemMany.module.css";

interface ListItemProps {
    propName: string,
    propArray: Array<string>,
}

export default function ListItemMany({ propName, propArray }: ListItemProps) {

    return (
        <div className={styles.listItemMany}>
            <h3>{propName}</h3>
            {propArray.map((arrayItem:any, index:any) => {
            return (
                <p key={index}>{arrayItem.name}</p>
            );
            })}
        </div>
    );
}