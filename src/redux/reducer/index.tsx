/*
 * Created by Asad on 30 May 2023 []
 */

import { combineReducers } from 'redux';
import { locationsReducer } from './locationsReducer';

export const rootReducer = combineReducers({
    locations: locationsReducer,
});