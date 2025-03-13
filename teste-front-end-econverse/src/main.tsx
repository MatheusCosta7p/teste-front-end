import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { router } from "./routes.tsx"
import { RouterProvider } from 'react-router-dom'
import "./global.scss"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
