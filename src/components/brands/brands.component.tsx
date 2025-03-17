import { IBrand } from "src/types/brand.type"
import styles from "./brands.module.scss"

const brands: IBrand[] =[
  { brandName: "econverse", logo: "/teste-front-end/images/Logo.svg"},
  { brandName: "econverse", logo: "/teste-front-end/images/Logo.svg"},
  { brandName: "econverse", logo: "/teste-front-end/images/Logo.svg"},
  { brandName: "econverse", logo: "/teste-front-end/images/Logo.svg"},
  { brandName: "econverse", logo: "/teste-front-end/images/Logo.svg"}
]

export function Brands () {
  return(
    <>
      <div className={styles.brandsGroup}>
        <h3>Navegue por marcas</h3>
        <div className={styles.brandsList}>
          {brands.map((brand) =>(
            <div key={brand.brandName} className={styles.brandItem}>
              <img src={brand.logo} alt={brand.brandName}/>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
