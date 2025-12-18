import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import { bootstrap } from 'safetest/react';


import './index.css';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

bootstrap({
  element: (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  ),
  webpackContext: import.meta.webpackContext('.', {
    recursive: true,
    regExp: /\.safetest$/,
    mode: 'lazy'
}),
  render: (element) => root.render(element),
});