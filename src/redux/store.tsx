/*
 * Created by Asad on 30 May 2023 []
 */

import { createEpicMiddleware } from 'redux-observable';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducer';
import { rootEpic } from './epics';

const epicMiddleware = createEpicMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [epicMiddleware],
});
epicMiddleware.run(rootEpic);

export { store};