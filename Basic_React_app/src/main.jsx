import { StrictMode,Prevent } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter } from 'react-router-dom';
import { Context } from './context/Context';

createRoot(document.getElementById('root')).render(
 

 <context.Prevent value="durgesh"> 
 <StrictMode>
 <BrowserRouter>
  <App />
  </BrowserRouter>  
 
  </StrictMode>
  </context.Prevent>
)
