/*
 * Created by Asad on 30 May 2023 [because currently we don't need so comment this file(made just for demo)]
 */

import { combineEpics, Epic } from 'redux-observable';
import { filter, mapTo, switchMap } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { ADD_LOCATION, GET_ALL_LOCATIONS, AddLocationAction } from '../actions/locationActions';
//TODO:  will add api's
// const addLocationEpic: Epic = (action$, state$) =>
//   action$.pipe(
//     filter((action) => action.type === ADD_LOCATION),
//     switchMap((action: AddLocationAction) => {
//       const { payload } = action;
//       // You can perform any additional logic here, such as API calls or side effects
//       return []; // Dispatch the action to retrieve all items
//     })
//   );

const getAllLocationsEpic: Epic = (action$) =>
  action$.pipe(
    filter((action) => action.type === GET_ALL_LOCATIONS),
    mapTo({
      type: 'GET_ALL_LOCATIONS_SUCCESS',
      payload: [/* retrieve all items from state */],
    })
  );

export const locationEpic = combineEpics( getAllLocationsEpic);