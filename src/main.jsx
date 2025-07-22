import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './component/index.css'; 
import App from './component/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
