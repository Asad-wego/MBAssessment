/*
 * Created by Asad on 30 May 2023 []
 */

import { Reducer } from 'redux';
import { ADD_LOCATION } from '../actions/locationActions';

const initialState: Location[] = [];

export const locationsReducer: Reducer<Location[], any> = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LOCATION:
      const { payload } = action;
      return [payload, ...state];
    default:
      return state;
  }
};