import styles from "./Charecters.module.css"
import LogoTitle from "../assets/logo-outline.png"
import Card from "../components/library/visual/Card";
import {useQuery, gql} from '@apollo/client';

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
      }
    `;

    const { loading, error, data } = useQuery(CHARACTERS_QUERY);

    // if(loading) {
    //   return <p>Loading ...</p>
    // }

    return(
        <div className={styles.characters}>
            <img src={LogoTitle} alt="movie title" style={{display: "block", margin: "0 auto", width: "30%"}}/>
            <div className={styles.charactersContainer}>
              {loading && <p>Loading ...</p>}
              {error && <p>There was an unexpected error</p>}
              {data &&
                data.characters.results.map((character:any) => {
                  return (
                    <Card key={character.id} image={character.image} title={character.name} subtitle={character.species} />
                  );
              })}

            </div>
        </div>
    );
}