/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: specificLocation
// ====================================================

export interface specificLocation_location_residents {
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

export interface specificLocation_location {
  __typename: "Location";
  /**
   * The id of the location.
   */
  id: string | null;
  /**
   * The name of the location.
   */
  name: string | null;
  /**
   * The type of the location.
   */
  type: string | null;
  /**
   * The dimension in which the location is located.
   */
  dimension: string | null;
  /**
   * List of characters who have been last seen in the location.
   */
  residents: (specificLocation_location_residents | null)[];
}

export interface specificLocation {
  /**
   * Get a specific locations by ID
   */
  location: specificLocation_location | null;
}

export interface specificLocationVariables {
  id?: number | null;
}
