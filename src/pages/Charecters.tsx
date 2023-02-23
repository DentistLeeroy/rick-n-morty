import styles from "./Charecters.module.css"
import LogoTitle from "../assets/logo-outline.png"
import Card from "../components/library/visual/Card";

export default function Charecters() {




    return(
        <>
            <img src={LogoTitle} alt="movie title" style={{display: "block", margin: "0 auto", width: "30%"}}/>
            <div className={styles.wrapper}>
                <Card title="Rick" subtitle={"Sanchez"} />
                <Card title="Rick" subtitle={"Sanchez"} />
                <Card title="Rick" subtitle={"Sanchez"} />
                <Card title={"Rick"} subtitle={"Sanchez"} />
                <Card title={"Rick"} subtitle={"Sanchez"} />
                <Card title={"Rick"} subtitle={"Sanchez"} />
                <Card title={"Rick"} subtitle={"Sanchez"} />
                <Card title={"Rick"} subtitle={"Sanchez"} />
            </div>
        </>
    );
}