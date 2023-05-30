/*
 * Created by Asad on 30 May 2023 [Actions can be done by packages of redux]
 */

export const ADD_LOCATION = 'ADD_LOCATION';
export const GET_ALL_LOCATIONS = 'GET_ALL_LOCATIONS';

export interface AddLocationAction {
  type: typeof ADD_LOCATION;
  payload: Location;
}

export interface GetAllLocationsAction {
  type: typeof GET_ALL_LOCATIONS;
}

export const addLocation = (location: Location): AddLocationAction => ({
  type: ADD_LOCATION,
  payload: location,
});

export const getAllLocations = (): GetAllLocationsAction => ({
  type: GET_ALL_LOCATIONS,
});