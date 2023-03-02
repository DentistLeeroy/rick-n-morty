import styles from "./Character.module.css"
import {useQuery, gql} from '@apollo/client';
import { useNavigate, useParams } from "react-router-dom";
import CommonButton from "../components/library/buttons/CommonButton";
import ListItem from "../components/library/visual/ListItem";
import Avatar from "../components/library/visual/Avatar";
import ListItemMany from "../components/library/visual/ListItemMany";

export default function Character() {

  let { id } = useParams();

  const CHARACTER_QUERY = gql `
  query specificCharacter($id: ID!) {
    character(id: $id) {
        id,
        image,
        name,
        status,
        species,
        type,
        gender,
        location {
          id,
          name
        },
        origin {
          id,
          name
        }
        episode {
          id,
          name
        }
    }
  }`;

  const navigate = useNavigate();

  const { loading, error, data } = useQuery<any>(CHARACTER_QUERY, {
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
      {error && <p>{String(error)}</p>}
      {data && <div className={styles.character}>
          <CommonButton variant="secondary" label="Go back" onClick={goBack} />
          <Avatar status={data.character.status} image={data.character.image} character={data.character.name} />
          <h1>{data.character.name}</h1>
          <div className={styles.list}>
            <ListItem propName="Specie" propValue={data.character.species}/>
            <ListItem propName="Type" propValue={data.character.type}/>
            <ListItem propName="Gender" propValue={data.character.gender}/>
            <ListItem propName="Origin" propValue={data.character.origin.name}/>
            <ListItem propName="Location" propValue={data.character.location.name}/>
            <ListItemMany propName="Episodes" propArray={data.character.episode}/>
          </div>
      </div>}
    </>
  );
}