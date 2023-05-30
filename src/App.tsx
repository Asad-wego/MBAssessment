/*
 * Created by Asad on 30 May 2023 []
 */

import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { HomeScreen } from './scenes/home';

const App = () => {
  return (
    <Provider store={store}>
      <HomeScreen/>
    </Provider>
  );
};

export default App;