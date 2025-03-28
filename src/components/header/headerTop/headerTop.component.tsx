import { Icon } from "../../ui/Icon/Icon.ui"
import styles from "./_headerTop.module.scss"

export default function HeaderTop() {
  return(
    <>
    <div className={styles.headerTop}>
      <p className={styles.headerTopText}>
        <Icon type="ShieldCheck" className={styles.icons}/>compra <span className={styles.headerTopSpan}> 100% segura</span>
      </p>
      <p className={styles.headerTopText}>
        <Icon type="Truck" className={styles.icons}/><span className={styles.headerTopSpan}>Frete grátis</span> acima de R$ 200 
      </p>
      <p className={styles.headerTopText}>
        <Icon type="CreditCard" className={styles.icons}/><span className={styles.headerTopSpan}>Parcele</span> suas compras
      </p>
    </div>
  </>
  )
}