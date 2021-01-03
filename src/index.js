//Main entery for our react application

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import GlobalStyles from './theme/GlobalStyles';
import App from './App';
import store from './app/redux/store';

ReactDOM.render(
  [
    <GlobalStyles key={0} />,
    <Provider key={1} store={store}>
      <App />
    </Provider>
  ],
  document.getElementById('root')
);
