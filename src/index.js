import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // Import App component
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App /> {/* Render App component here */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
