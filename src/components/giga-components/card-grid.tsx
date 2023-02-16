import Card from "../library/visual/Card";
import styles from "../giga-components/card-grid.module.css"

export default function () {
    return(
        <>
        <div className={styles.wrapper}>
            <Card title={"Rick"} subtitle={"Sanchez"}></Card>
            <Card title={"Rick"} subtitle={"Sanchez"}></Card>
            <Card title={"Rick"} subtitle={"Sanchez"}></Card>
            <Card title={"Rick"} subtitle={"Sanchez"}></Card>
            <Card title={"Rick"} subtitle={"Sanchez"}></Card>
            <Card title={"Rick"} subtitle={"Sanchez"}></Card>
            <Card title={"Rick"} subtitle={"Sanchez"}></Card>
            <Card title={"Rick"} subtitle={"Sanchez"}></Card>
        </div>
        </>
    );
}