import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import App from './App';

import './index.scss';


const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
  
  reportWebVitals(),
  rootElement
  );
  