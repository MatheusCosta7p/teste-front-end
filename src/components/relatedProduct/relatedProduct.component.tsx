import Filter from "./filter/filter.component";
import styles from "./relatedProduct.module.scss";

interface RelatedProductProps {
  filter?: boolean;
}

export function RelatedProduct({ filter }: RelatedProductProps) {
  return (
    <div className={styles.relatedProduct}>
      
      <div className={styles.header}>
        <div className={styles.divider}></div>
        <h3>Produtos Relacionados</h3>
        <div className={styles.divider}></div>
      </div>

      <div className={styles.action}>
        {filter ? <Filter /> : <span>Ver Todos</span>}
      </div>
    </div>
  );
}
