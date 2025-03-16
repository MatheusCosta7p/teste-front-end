import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from "./product.module.scss";

const ProductModal: React.FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

 
  const closeModal = () => {
    navigate(-1); 
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button onClick={closeModal} className={styles.closeButton}>
          Fechar
        </button>
        <h1>Detalhes do Produto</h1>
        <p>Slug do Produto: {slug}</p>
      </div>
    </div>
  );
};

export default ProductModal;
