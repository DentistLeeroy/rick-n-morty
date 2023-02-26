import styles from "./Locations.module.css"
import LogoTitle from "../assets/logo-outline.png"
import {useQuery, gql} from '@apollo/client';
import CardWithoutImage from "../components/library/visual/CardWithoutImage";

export default function Locations() {

  const LOCATIONS_QUERY = gql `
  query allLocations {
    locations {
      results{
        id,
        name,
        type,
      }
    }
  }
  `;

  const { loading, error, data } = useQuery(LOCATIONS_QUERY);    

  return(
    <div className={styles.locations}>
      <img src={LogoTitle} alt="Logo"/>
      <div className={styles.locationsContainer}>
        {loading && <p>Loading ...</p>}
        {error && <p>There was an unexpected error</p>}
        {data &&
          data.locations.results.map((location:any) => {
            return (
              <CardWithoutImage key={location.id} title={location.name} subtitle={location.type} />
            );
        })}
      </div>
    </div>
  );
}