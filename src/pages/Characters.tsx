import styles from "./Charecters.module.css"
import LogoTitle from "../assets/logo-outline.png"
import Card from "../components/library/visual/Card";
import {useQuery, gql} from '@apollo/client';
import { useNavigate } from "react-router-dom";
import CommonButton from "../components/library/buttons/CommonButton";
import { useState } from "react";
import { allCharacters } from "./__generated__/allCharacters";

export default function Characters() {

  const [offset, setOffset] = useState(0);

  const CHARACTERS_QUERY = gql `
  query allCharacters($limit: Int, $offset: Int) {
    characters(limit: $limit, offset: $offset) {
      results {
        id
        name
        species
        image
      }
    }
  }`;

  const navigate = useNavigate();

  const handleLoadMore = () => {
    setOffset((offset) => offset + 20);
  };

  const { loading, error, data } = useQuery<allCharacters>(CHARACTERS_QUERY, {
    variables: {
      limit: 20,
      offset: 0,
    }
  });

  return(
    <div className={styles.characters}>
        <img src={LogoTitle} alt="Logo"/>
        <div className={styles.charactersContainer}>
          {loading && <p>Loading ...</p>}
          {error && <p>There was an unexpected error</p>}
          {data && data.characters.results.map((character:any) => {
            
            function cardClick() {
              navigate(`/${character.id}`);
            }
              
            return (
              <Card key={character.id} image={character.image} title={character.name} subtitle={character.species} onClick={cardClick} />
            );  
            
          })}
        </div>
        <CommonButton label="Load more" variant="primary" onClick={handleLoadMore}  />
    </div>
  );
}