import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom
import App from './App'; // Assuming your root component is named App
import './main.css';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
