import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./assets/styles/_main.scss"
import { ProductProvider } from './context/product/productProvider.tsx'
import { QueryClient, QueryClientProvider } from 'react-query';
import AppRoutes from './routes.tsx'
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <QueryClientProvider client={queryClient}>
      <ProductProvider>
          <BrowserRouter basename='/teste-front-end'>
            <AppRoutes />
          </BrowserRouter>
        </ProductProvider>  
   </QueryClientProvider>
  </StrictMode>,
)
