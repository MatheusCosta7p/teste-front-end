import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./assets/styles/main.scss"
import Home from './pages/home/Home.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
