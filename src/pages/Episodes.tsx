import styles from "./Episodes.module.css"
import LogoTitle from "../assets/logo-outline.png"
import Card from "../components/library/visual/Card";
import {useQuery, gql} from '@apollo/client';

export default function Episodes() {

    const EPISODES_QUERY = gql `
    query allEpisodes {
      episodes{
        results{
          id,
          name,
          air_date
        }
      }
}
    `;

    const { loading, error, data } = useQuery(EPISODES_QUERY);

    // if(loading) {
    //   return <p>Loading ...</p>
    // }

    return(
        <div className={styles.episodes}>
            <img src={LogoTitle} alt="movie title" style={{display: "block", margin: "0 auto", width: "30%"}}/>
            <div className={styles.episodesContainer}>
              {loading && <p>Loading ...</p>}
              {error && <p>There was an unexpected error</p>}
              {data &&
                data.episodes.results.map((episode:any) => {
                  return (
                    <Card key={episode.id} title={episode.name} subtitle={episode.air_date} />
                  );
              })}

            </div>
        </div>
    );
}