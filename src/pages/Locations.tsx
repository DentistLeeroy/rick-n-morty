import styles from "./Locations.module.css"
import LogoTitle from "../assets/logo-outline.png"
import Card from "../components/library/visual/Card";
import {useQuery, gql} from '@apollo/client';

export default function Charecters() {

    const LOCATIONS_QUERY = gql `
    query allLocations {
      locations {
        results{
          name,
          type,
          dimension,
          created
        }
      }
    `;

    const { loading, error, data } = useQuery(LOCATIONS_QUERY);

    if(loading) {
      return <p>Loading ...</p>
    }

    return(
        <div className={styles.locations}>
            <img src={LogoTitle} alt="movie title" style={{display: "block", margin: "0 auto", width: "30%"}}/>
            <div className={styles.locationsContainer}>
              {loading && <p>Loading ...</p>}
              {error && <p>There was an unexpected error</p>}
              {data &&
                data.locations.results.map((location:any, index:any) => {
                  return (
                    <Card key={index} image={location.image} title={location.name} subtitle={location.species} />
                  );
              })}

            </div>
        </div>
    );
}