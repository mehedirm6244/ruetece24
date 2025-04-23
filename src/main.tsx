import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Preloader from './components/ui/Preloader.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Preloader />
    <App />
  </StrictMode>,
)
