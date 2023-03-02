/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: allEpisodes
// ====================================================

export interface allEpisodes_episodes_results {
  __typename: "Episode";
  /**
   * The id of the episode.
   */
  id: string | null;
  /**
   * The name of the episode.
   */
  name: string | null;
  /**
   * The code of the episode.
   */
  episode: string | null;
}

export interface allEpisodes_episodes {
  __typename: "Episodes";
  results: (allEpisodes_episodes_results | null)[] | null;
}

export interface allEpisodes {
  /**
   * Get the list of all episodes
   */
  episodes: allEpisodes_episodes | null;
}
