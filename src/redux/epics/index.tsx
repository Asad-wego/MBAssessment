/*
 * Created by Asad on 30 May 2023 []
 */

import { combineEpics } from 'redux-observable';
import { locationEpic } from './locationEpic';

export const rootEpic = combineEpics(locationEpic);