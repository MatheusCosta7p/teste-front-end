import React from 'react';
import { IProduct } from 'src/types/product.type';
import styles from './_modalProduct.module.scss';
import Button from '../../ui/button/button.ui';
import Modal from '../../ui/modal/modal.component';
import { formatPriceToBRL } from '../../../utils/price.utils';
import { Icon } from '../../ui/Icon/Icon.ui';
import useQuantity from '../../../hooks/useQuantity';

interface ModalProductProps {
  product: IProduct;
  closeModal: () => void;
}

export const ModalProduct: React.FC<ModalProductProps> = ({ product, closeModal }) => {
  const { quantity, increaseQuantity, decreaseQuantity } = useQuantity(1);

  return (
    <Modal isOpen={true} onClose={closeModal}>
      <div className={styles.modalProductContent}>
        <div className={styles.imageColumn}>
          <img src={product.photo} alt={product.productName} />
        </div>
        <div className={styles.textColumn}>
          <h2>{product.productName}</h2>
          <p>R$ {formatPriceToBRL(product.price)}</p>
          <small>{product.descriptionShort}</small>
          <br />
          <a>Veja mais detalhes do produto &gt;</a>
          <div className={styles.buttonsModal}>
            <div className={styles.quantityButtons}>
              <Button variant="quantity" onClick={decreaseQuantity}>
                <Icon type='Minus' />
              </Button>
                <span>{quantity}</span>
              <Button variant="quantity" onClick={increaseQuantity}>
                <Icon type='Plus' />
              </Button>
            </div>

            <Button variant="yellow" onClick={() => {}}>
              COMPRAR
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
