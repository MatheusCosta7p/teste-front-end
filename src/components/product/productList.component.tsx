import React from "react";
import { useProducts } from "../../hooks/useProducts";
import { ProductCard } from "./productCard.component";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./product.module.scss";

const ProductList: React.FC = () => {
  const { products, isLoading, error } = useProducts();
  const { productSlug } = useParams<{ productSlug: string }>();
  const navigate = useNavigate();

  const createSlug = (name: string) =>
    name.toLowerCase().replace(/\s+/g, "-");

  const handleCloseModal = () => {
    navigate("/"); // Volta para a lista principal
  };

  const selectedProduct = products?.find(
    (product) => createSlug(product.productName) === productSlug
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className={styles.productList}>
        {products?.map((product) => (
          <ProductCard key={product.productName} product={product} />
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <button onClick={handleCloseModal}>Close</button>
            <h2>{selectedProduct.productName}</h2>
            <img src={selectedProduct.photo} alt={selectedProduct.productName} />
            <p>{selectedProduct.descriptionShort}</p>
            <p>R$ {selectedProduct.price.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
