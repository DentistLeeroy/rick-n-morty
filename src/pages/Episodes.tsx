import styles from "./Episodes.module.css"
import LogoTitle from "../assets/logo-outline.png"
import {useQuery, gql} from '@apollo/client';
import CardWithoutImage from "../components/library/visual/CardWithoutImage";
import { useNavigate } from "react-router-dom";
import CommonButton from "../components/library/buttons/CommonButton";
import { allEpisodes } from "./__generated__/allEpisodes";

export default function Episodes() {

  const EPISODES_QUERY = gql `
  query allEpisodes {
    episodes{
      results{
        id,
        name,
        episode,
      }
    }
  }`;

  const navigate = useNavigate();

  const { loading, error, data } = useQuery<allEpisodes>(EPISODES_QUERY);

  return(
    <div className={styles.episodes}>
      <img src={LogoTitle} alt="Logo"/>
      <div className={styles.episodesContainer}>
        {loading && <p>Loading ...</p>}
        {error && <p>There was an unexpected error</p>}
        {data && data.episodes.results.map((episode:any) => {

          function click() {
            navigate(`/episodes/${episode.id}`);
          }

          return (
            <CardWithoutImage key={episode.id} title={episode.name} subtitle={episode.episode} onClick={click} />
          );
        
        })}
      </div>
      <CommonButton label="Load more" variant="primary" />
    </div>
  );
}