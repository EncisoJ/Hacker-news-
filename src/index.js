import React from 'react';
import ReactDOM from 'react-dom';
import { NewsProvider } from './util/context';
import App from './App';
ReactDOM.render(
  <React.StrictMode>
    <NewsProvider>
    <App/>
    </NewsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
