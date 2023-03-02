import styles from "./Location.module.css"
import {useQuery, gql} from '@apollo/client';
import { useNavigate, useParams } from "react-router-dom";
import CommonButton from "../components/library/buttons/CommonButton";
import ListItem from "../components/library/visual/ListItem";
import ListItemMany from "../components/library/visual/ListItemMany";

export default function Location() {

  let { id } = useParams();

  const LOCATION_QUERY = gql `
  query specificLocation($id: Int) {
    location(id:$id) {
        id,
        name,
        type,
        dimension,
        residents {
          id,
          name
        },
    }
  }`;

  const navigate = useNavigate();

  const { loading, error, data } = useQuery(LOCATION_QUERY, {
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
      {data && <div className={styles.location}>
          <CommonButton variant="secondary" label="Go back" onClick={goBack} />
          <h1>{data.location.name}</h1>
          <div className={styles.list}>
            <ListItem propName="Type" propValue={data.location.type}/>
            <ListItem propName="Dimension" propValue={data.location.dimension}/>
            <ListItemMany propName="Residents" propArray={data.location.residents}/>
          </div>
      </div>}
    </>
  );
}