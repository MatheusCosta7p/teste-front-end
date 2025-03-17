import React from 'react';
import { createRoutesFromElements, Route, RouterProvider, createBrowserRouter } from 'react-router';
import Home from './pages/home/Home';
import NotFound from '../src/pages/notFound'; 

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/teste-front-end" element={<Home />} />
      <Route path="*" element={<NotFound />} /> 
    </>
  )
);

const AppRoutes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
