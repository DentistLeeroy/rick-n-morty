/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: allCharacters
// ====================================================

export interface allCharacters_characters_results {
  __typename: "Character";
  /**
   * The id of the character.
   */
  id: string | null;
  /**
   * The name of the character.
   */
  name: string | null;
  /**
   * The species of the character.
   */
  species: string | null;
  /**
   * Link to the character's image.
   * All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
   */
  image: string | null;
}

export interface allCharacters_characters {
  __typename: "Characters";
  results: (allCharacters_characters_results | null)[] | null;
}

export interface allCharacters {
  /**
   * Get the list of all characters
   */
  characters: allCharacters_characters | null;
}

export interface allCharactersVariables {
  visibleCards?: number | null;
}
