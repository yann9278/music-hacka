import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';

import './index.css';

ReactDOM.render(
  <BrowserRouter >
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter >,
  document.getElementById('root')
);

reportWebVitals();
