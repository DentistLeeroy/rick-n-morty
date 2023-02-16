import Card from "../library/visual/Card";
import styles from "../giga-components/card-grid.module.css"
import LogoTitle from "../../assets/logo-outline.png"

export default function () {
    return(
        <>
        <img src={LogoTitle} alt="movie title" style={{display: "block", margin: "0 auto", width: "30%"}}/>
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