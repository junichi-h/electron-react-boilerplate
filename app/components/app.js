/* @ flow */
import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';

import AppContainer from '../containers/app-container';

const App = (): React.Element => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

export default App;
