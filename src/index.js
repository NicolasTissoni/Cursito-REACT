import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './routes/App';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode.MODE>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode.MODE>,
  document.getElementById('root')
);