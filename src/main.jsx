import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import './index.css'

/*! For license information please see main.js.LICENSE.txt */
const rootDiv = document.createElement('div');
const rootId = 'rckcccc_root'
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
