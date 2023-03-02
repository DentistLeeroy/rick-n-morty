import styles from "./Charecters.module.css"
import LogoTitle from "../assets/logo-outline.png"
import Card from "../components/library/visual/Card";
import {useQuery, gql} from '@apollo/client';
import { useNavigate } from "react-router-dom";
import CommonButton from "../components/library/buttons/CommonButton";
import { useState } from "react";

export default function Characters() {

  const [offset, setOffset] = useState(0);

  const CHARACTERS_QUERY = gql `
  query allCharacters {
    characters {
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

  const { loading, error, data } = useQuery<any>(CHARACTERS_QUERY, {
    variables: {
    }
  });

  return(
    <div className={styles.characters}>
        <img src={LogoTitle} alt="Logo"/>
        <div className={styles.charactersContainer}>
          {loading && <p>Loading ...</p>}
          {error && <p>There was an unexpected error</p>}
          {data && data?.characters?.results.map((character:any) => {
            
            function cardClick() {
              navigate(`/${character?.id}`);
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