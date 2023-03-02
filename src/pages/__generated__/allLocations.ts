/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: allLocations
// ====================================================

export interface allLocations_locations_results {
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
}

export interface allLocations_locations {
  __typename: "Locations";
  results: (allLocations_locations_results | null)[] | null;
}

export interface allLocations {
  /**
   * Get the list of all locations
   */
  locations: allLocations_locations | null;
}

export interface allLocationsVariables {
  currentPage?: number | null;
}
