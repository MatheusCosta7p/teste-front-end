import React from "react";
import { useProducts } from "../../hooks/useProducts";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./product.module.scss";
import { Card } from "../ui/card/card.ui";
import { formatPrice, getDiscountedPrice, getInstallments } from "../../utils/price.utils";
import Button from "../ui/button/button.ui";

const ProductList: React.FC = () => {
  const { products, isLoading, error } = useProducts();
  const { productSlug } = useParams<{ productSlug: string }>();
  const navigate = useNavigate();

  const createSlug = (name: string) =>
    name.toLowerCase().replace(/\s+/g, "-");

  const handleCloseModal = () => {
    navigate("/"); 
  };

  const selectedProduct = products?.find(
    (product) => createSlug(product.productName) === productSlug
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const openModal = (e: React.MouseEvent, slug: string) => {
    e.preventDefault();
    navigate(`/${slug}`, { state: { backgroundLocation: { pathname: window.location.pathname, search: window.location.search } } });
  };

  return (
    <div>
      <div className={styles.productList}>
        {products?.map((product) => {
          const slug = createSlug(product.productName); 

          return (
            <Card variant="product" key={product.productName}>
              <div onClick={(e) => openModal(e, slug)} className={styles.productCard}>
                <img src={product.photo} alt={product.productName} />
                <p className={styles.productName}>
                  {product.productName}
                </p>
                <p className={styles.productName}>
                  {product.descriptionShort}
                </p>
                
                <p className={styles.priceDiscounted}>
                  <span style={{ textDecoration: 'line-through' }}>
                    {formatPrice(getDiscountedPrice(product.price, 0.10))} 
                  </span>
                  <br />
                  {formatPrice(product.price)} 
                </p>

                <p className={styles.priceInstallments}>
                  {getInstallments(product.price, 2)} 
                </p>

                <p>Frete grátis</p>

                <Button variant="blue">
                  COMPRAR
                </Button>
              </div>
            </Card>
          );
        })}
      </div>

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
