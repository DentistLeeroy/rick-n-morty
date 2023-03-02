import styles from "./Episodes.module.css"
import LogoTitle from "../assets/logo-outline.png"
import {useQuery, gql} from '@apollo/client';
import CardWithoutImage from "../components/library/visual/CardWithoutImage";
import { useNavigate } from "react-router-dom";
import CommonButton from "../components/library/buttons/CommonButton";
import { useEffect, useState } from "react";

export default function Episodes() {

  const EPISODES_QUERY = gql `
  query allEpisodes($currentPage: Int) {
    episodes(page: $currentPage) {
      results{
        id,
        name,
        episode,
      }
    }
  }`;

  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);

  const navigate = useNavigate();

  const { loading, error, data } = useQuery<any>(EPISODES_QUERY, {
    variables: {
      currentPage: currentPage,
    }
  });

  useEffect(()=> {

    if(data) {
      if(data.episodes.results.length < 20) {
        setLastPage(currentPage);
      } else if(data.episodes.results.length == 0) {
        setLastPage((lastPage) => lastPage - 1);
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
    <div className={styles.episodes}>
      <img src={LogoTitle} alt="Logo"/>
      <div className={styles.episodesContainer}>
        {loading && <p>Loading ...</p>}
        {error && <p>There was an unexpected error</p>}
        {data && data.episodes.results.map((episode:any) => {

          function click() {
            navigate(`/episodes/${episode.id}`);
          }

          return (
            <CardWithoutImage key={episode.id} title={episode.name} subtitle={episode.episode} onClick={click} />
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