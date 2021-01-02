//Main entery for our react application

import React from 'react';
import ReactDOM from 'react-dom';

import GlobalStyles from './themes/GlobalStyles';
import App from './App';

ReactDOM.render(
  [
    <GlobalStyles/>,
    <App/>
  ],
  document.getElementById('root')
);
