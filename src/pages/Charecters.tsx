import styles from "./Charecters.module.css"
import LogoTitle from "../assets/logo-outline.png"
import Card from "../components/library/visual/Card";
import {useQuery, gql} from '@apollo/client';
import { useNavigate } from "react-router-dom";
import CommonButton from "../components/library/buttons/CommonButton";

export default function Charecters() {

  const CHARACTERS_QUERY = gql `
  query allCharacters {
    characters {
      results {
        id,
        name,
        species,
        image
      }
    }
  }`;

  const navigate = useNavigate();

  const { loading, error, data } = useQuery(CHARACTERS_QUERY);

  return(
    <div className={styles.characters}>
        <img src={LogoTitle} alt="Logo"/>
        <div className={styles.charactersContainer}>
          {loading && <p>Loading ...</p>}
          {error && <p>There was an unexpected error</p>}
          {data && data.characters.results.map((character:any) => {
            
            function click() {
              navigate(`/${character.id}`);
            }
              
            return (
              <Card key={character.id} image={character.image} title={character.name} subtitle={character.species} onClick={click} />
            );
            
          })}
        </div>
        <CommonButton label="Load more" variant="primary" />
    </div>
  );
}