import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./assets/styles/_main.scss"
import { ProductProvider } from './context/product/productProvider.tsx'
import { QueryClient, QueryClientProvider } from 'react-query';
import AppRoutes from './routes.tsx'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
        <ProductProvider>
            <AppRoutes />
          </ProductProvider>  
   </QueryClientProvider>
  </StrictMode>,
)
