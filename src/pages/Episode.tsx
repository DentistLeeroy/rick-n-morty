import styles from "./Episode.module.css"
import {useQuery, gql} from '@apollo/client';
import { useNavigate, useParams } from "react-router-dom";
import CommonButton from "../components/library/buttons/CommonButton";
import ListItem from "../components/library/visual/ListItem";
import ListItemMany from "../components/library/visual/ListItemMany";

export default function Episode() {

  let { id } = useParams();

  const EPISODE_QUERY = gql `
  query specificEpisode($id: ID!) {
    episode(id: $id) {
        id,
        name,
        air_date,
        episode,
        characters {
          id,
          name,
        },
    }
  }`;

  const navigate = useNavigate();

  const { loading, error, data } = useQuery<any>(EPISODE_QUERY, {
    variables: {
      id: id,
    }
  });

  function goBack() {
    navigate(-1);
  }

  return(
    <>
      {loading && <p>Loading ...</p>}
      {error && <p>There was an unexpected error</p>}
      {data && <div className={styles.episode}>
          <CommonButton variant="secondary" label="Go back" onClick={goBack} />
          <h1>{data.episode.name}</h1>
          <div className={styles.list}>
            <ListItem propName="Air date" propValue={data.episode.air_date}/>
            <ListItem propName="Episode" propValue={data.episode.episode}/>
            <ListItemMany propName="Characters" propArray={data.episode.characters}/>
          </div>
      </div>}
    </>
  );
}