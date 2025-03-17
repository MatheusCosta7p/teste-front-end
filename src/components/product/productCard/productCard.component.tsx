import React from 'react';
import { formatPriceToBRL } from '../../../utils/price.utils';
import styles from './productCard.module.scss';
import { IProduct } from '../../../types/product.type';
import Button from '../../ui/button/button.ui';
import { Card } from '../../ui/card/card.ui';

interface ProductCardProps {
  product: IProduct;
  openModal: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedProduct: React.Dispatch<React.SetStateAction<IProduct | null>>;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, openModal, setSelectedProduct }) => {
  const handleClick = () => {
    setSelectedProduct(product);
    openModal(true);
  };

  return (
    <Card variant="product">
      <div onClick={handleClick} className={styles.productCard}>
        <img src={product.photo} alt={product.productName} />
        <p className={styles.productName}>{product.productName}</p>
        <p className={styles.productName}>{product.descriptionShort}</p>
        <p className={styles.priceDiscounted}>
          <span style={{ textDecoration: 'line-through' }}>
            {formatPriceToBRL(product.price)}
          </span>
          <br />
          {formatPriceToBRL(product.price)}
        </p>
        <p className={styles.priceInstallments}>
        ou 2x de {formatPriceToBRL(product.price/2)} sem juros
        </p>
        <p>Frete grátis</p>
        <Button variant="blue">COMPRAR</Button>
      </div>
    </Card>
  );
};
