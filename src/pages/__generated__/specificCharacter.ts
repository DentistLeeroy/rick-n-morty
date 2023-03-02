/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: specificCharacter
// ====================================================

export interface specificCharacter_character_location {
  __typename: "Location";
  /**
   * The id of the location.
   */
  id: string | null;
  /**
   * The name of the location.
   */
  name: string | null;
}

export interface specificCharacter_character_origin {
  __typename: "Location";
  /**
   * The id of the location.
   */
  id: string | null;
  /**
   * The name of the location.
   */
  name: string | null;
}

export interface specificCharacter_character_episode {
  __typename: "Episode";
  /**
   * The id of the episode.
   */
  id: string | null;
  /**
   * The name of the episode.
   */
  name: string | null;
}

export interface specificCharacter_character {
  __typename: "Character";
  /**
   * The id of the character.
   */
  id: string | null;
  /**
   * Link to the character's image.
   * All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
   */
  image: string | null;
  /**
   * The name of the character.
   */
  name: string | null;
  /**
   * The status of the character ('Alive', 'Dead' or 'unknown').
   */
  status: string | null;
  /**
   * The species of the character.
   */
  species: string | null;
  /**
   * The type or subspecies of the character.
   */
  type: string | null;
  /**
   * The gender of the character ('Female', 'Male', 'Genderless' or 'unknown').
   */
  gender: string | null;
  /**
   * The character's last known location
   */
  location: specificCharacter_character_location | null;
  /**
   * The character's origin location
   */
  origin: specificCharacter_character_origin | null;
  /**
   * Episodes in which this character appeared.
   */
  episode: (specificCharacter_character_episode | null)[];
}

export interface specificCharacter {
  /**
   * Get a specific character by ID
   */
  character: specificCharacter_character | null;
}

export interface specificCharacterVariables {
  id?: number | null;
}
