/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: specificEpisode
// ====================================================

export interface specificEpisode_episode_characters {
  __typename: "Character";
  /**
   * The id of the character.
   */
  id: string | null;
  /**
   * The name of the character.
   */
  name: string | null;
}

export interface specificEpisode_episode {
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
   * The air date of the episode.
   */
  air_date: string | null;
  /**
   * The code of the episode.
   */
  episode: string | null;
  /**
   * List of characters who have been seen in the episode.
   */
  characters: (specificEpisode_episode_characters | null)[];
}

export interface specificEpisode {
  /**
   * Get a specific episode by ID
   */
  episode: specificEpisode_episode | null;
}

export interface specificEpisodeVariables {
  id?: number | null;
}
