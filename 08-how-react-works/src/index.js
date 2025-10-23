import React from 'react';

import ReactDOM from 'react-dom/client'; // 这是 React 18 的写法
// import ReactDOM from 'react-dom'; // 这是 React 17 的写法

import App from './App';
import './index.css';

// REACT 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// REACT 17
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
