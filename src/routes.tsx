import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/home/Home';
import ProductModal from './components/product/productModal.component';

const AppRoutes: React.FC = () => {
  const location = useLocation();
  const state = location.state as { backgroundLocation?: Location };

  return (
    <>
      {/* Define as rotas principais */}
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<Home />} />
      </Routes>

      {/* Rotas para modais */}
      {state?.backgroundLocation && (
        <Routes>
          <Route path="/:slug" element={<ProductModal />} />
        </Routes>
      )}
    </>
  );
};

export default AppRoutes;
