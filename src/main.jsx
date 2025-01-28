import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Recent_items } from './components/context/cont.jsx'
import 'regenerator-runtime/runtime';
import StaticExample from './components/reponse_bar/modal.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Recent_items>
    
     <App />
  </Recent_items>
  
   
  </StrictMode>,
)
