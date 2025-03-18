import React, { useState, useEffect } from 'react';
import { IProduct } from 'src/types/product.type';
import styles from './_productList.module.scss';
import { useProducts } from '../../../hooks/useProducts';
import { Pagination } from '../../ui/pagination/pagination.ui';
import { ModalProduct } from '../modalProduct/modalProduct.component';
import { ProductCard } from '../productCard/productCard.component';

const ProductList: React.FC = () => {
  const { products, isLoading, error } = useProducts();
  
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth < 1280) setItemsPerPage(1);
    else setItemsPerPage(4);
  }, [windowWidth]);

  if (isLoading) return <div>Carregando...</div>;
  if (error || !products) return <div>Erro: {error || 'Nenhum produto disponível'}</div>;

  const currentProducts = products.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <div className={styles.productListContainer}>
      <div className={styles.productListWrapper}>
        {currentProducts.map((product) => (
          <ProductCard key={product.productName} product={product} openModal={setModalOpen} setSelectedProduct={setSelectedProduct} />
        ))}
        <Pagination 
          currentPage={currentPage} 
          totalItems={products.length} 
          itemsPerPage={itemsPerPage} 
          setCurrentPage={setCurrentPage} 
        />
      </div>

      {modalOpen && selectedProduct && (
        <ModalProduct product={selectedProduct} closeModal={() => setModalOpen(false)} />
      )}
    </div>
  );
};

export default ProductList;
