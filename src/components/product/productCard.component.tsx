import React from 'react';
import { IProduct } from 'src/types/product.type';
import { useNavigate } from 'react-router-dom';
import styles from './product.module.scss';

interface ProductCardProps {
  product: IProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();
  const slug = product.productName.toLowerCase().replace(/\s+/g, '-');

  const openModal = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(`/${slug}`, { state: { backgroundLocation: { pathname: window.location.pathname, search: window.location.search } } });
  };
  

  return (
    <div onClick={openModal} className={styles.productCard}>
      <img src={product.photo} alt={product.productName} />
      <h3>{product.productName}</h3>
      <p>{product.descriptionShort}</p>
      <p>R$ {product.price.toFixed(2)}</p>
    </div>
  );
};

export { ProductCard };
