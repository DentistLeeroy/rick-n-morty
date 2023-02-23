import styles from "./Charecters.module.css"
import LogoTitle from "../assets/logo-outline.png"
import Card from "../components/library/visual/Card";
import {useQuery, gql} from '@apollo/client';

export default function Charecters() {

    const CHARACTERS_QUERY = gql `
    query allCharacters {
        characters {
          results {
            name
            species
            status
            image
            gender
            type
            origin {
              name
            }
            location {
              name
            }
          }
        }
      }
    ` 
    const { loading, error, data } = useQuery(CHARACTERS_QUERY);
    console.log(data);
    

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