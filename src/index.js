//Main entery for our react application

import React from 'react';
import ReactDOM from 'react-dom';

import GlobalStyles from './theme/GlobalStyles';
import App from './App';

ReactDOM.render(
  [
    <GlobalStyles key={0}/>,
    <App key={1}/>
  ],
  document.getElementById('root')
);
