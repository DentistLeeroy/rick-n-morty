import styles from "./Charecter.module.css"
import {useQuery, gql} from '@apollo/client';
import { useNavigate, useParams } from "react-router-dom";
import Badge from "../components/library/visual/Badge";
import CommonButton from "../components/library/buttons/CommonButton";

export default function Charecter() {

  let { id } = useParams();

  const CHARACTER_QUERY = gql `
  query specificCharecter {
    character(id:${id}) {
        id,
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
    }
  }`;

  const navigate = useNavigate();

  const { loading, error, data } = useQuery(CHARACTER_QUERY);

  function goBack() {
    navigate(-1);
  }

  return(
    <>
      {loading && <p>Loading ...</p>}
      {error && <p>There was an unexpected error</p>}
      {data && <div className={styles.characters}>
          <CommonButton variant="secondary" label="Go back" onClick={goBack} />
          <p>{data.character.id}</p>
          <p>{data.character.status}</p>
          <p>{data.character.name}</p>
          <div>
            <p>Specie</p>
            <p>{data.character.species}</p>
          </div>
          <div>
            <p>Type</p>
            <p>{data.character.type}</p>
          </div>
          <div>
            <p>Gender</p>
            <p>{data.character.gender}</p>
          </div>
          <div>
            <p>Origin</p>
            <p>{data.character.origin.id}</p>
            <p>{data.character.origin.name}</p>        
          </div>
          <div>
            <p>Location</p>
            <p>{data.character.location.id}</p>
            <p>{data.character.location.name}</p>
          </div>
      </div>}
    </>
  );
}