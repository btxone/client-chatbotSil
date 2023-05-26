import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";

const generateUniqueId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

const rootDiv = document.createElement('div');
const rootId = generateUniqueId();
rootDiv.id = rootId;

// Agrega el elemento div al body del documento
document.body.appendChild(rootDiv);

ReactDOM.createRoot(document.getElementById(rootId)).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)