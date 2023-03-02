import styles from "./Locations.module.css"
import LogoTitle from "../assets/logo-outline.png"
import {useQuery, gql} from '@apollo/client';
import CardWithoutImage from "../components/library/visual/CardWithoutImage";
import { useNavigate } from "react-router-dom";
import CommonButton from "../components/library/buttons/CommonButton";
import { useEffect, useState } from "react";

export default function Locations() {

  
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
  
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);
  
  const navigate = useNavigate();

  const { loading, error, data } = useQuery<any>(LOCATIONS_QUERY, {
    variables: {
      currentPage: currentPage,
    }
  });

  useEffect(()=> {

    if(data) {
      if(data.locations.results.length < 20) {
        setLastPage(currentPage);
      } else if(data.locations.results.length == 0) {
        setLastPage((currentPage) => currentPage - 1);
      }
    }

  }, [data])


  const nextPage = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };

  const previousPage = () => {
    setCurrentPage((currentPage) => currentPage - 1);
    setLastPage(0);
  };

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
        {currentPage != 1 && <CommonButton label="< Previous" variant="primary" onClick={previousPage} />}
        <p>{currentPage}</p>
        {lastPage == 0 && <CommonButton label="Next >" variant="primary" onClick={nextPage} />}
      </div>
    </div>
  );
}