import styles from "./Locations.module.css"
import LogoTitle from "../assets/logo-outline.png"
import {useQuery, gql} from '@apollo/client';
import CardWithoutImage from "../components/library/visual/CardWithoutImage";
import { useNavigate } from "react-router-dom";
import CommonButton from "../components/library/buttons/CommonButton";
import { useState } from "react";

export default function Locations() {

  const [currentPage, setCurrentPage] = useState(1);

  const LOCATIONS_QUERY = gql `
  query allLocations($currentPage: Int) {
    locations(page: $currentPage) {
      results{
        id,
        name,
        type,
      }
    }
  }
  `;

  const nextPage = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };

  const previousPage = () => {
    if(currentPage == 1){
      setCurrentPage(1)
    } else {
      setCurrentPage((currentPage) => currentPage - 1);
    }
  };

  const navigate = useNavigate();

  const { loading, error, data } = useQuery(LOCATIONS_QUERY, {
    variables: {
      currentPage: currentPage,
    }
  });

  return(
    <div className={styles.locations}>
      <img src={LogoTitle} alt="Logo"/>
      <div className={styles.locationsContainer}>
        {loading && <p>Loading ...</p>}
        {error && <p>There was an unexpected error</p>}
        {data && data.locations.results.map((location:any) => {

          function click() {
            navigate(`/locations/${location.id}`);
          }

          return (
            <CardWithoutImage key={location.id} title={location.name} subtitle={location.type} onClick={click} />
          );

        })}
      </div>
      <div className={styles.pagination}>
        <CommonButton label="< Previous" variant="primary" onClick={previousPage} />
        <p>Page: {currentPage}</p>
        <CommonButton label="Next >" variant="primary" onClick={nextPage} />
      </div>
    </div>
  );
}