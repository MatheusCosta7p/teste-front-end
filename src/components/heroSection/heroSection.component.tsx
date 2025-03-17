import Button from "../ui/button/button.ui"
import styles from "./_heroSection.module.scss"

export function HeroSection (){
  return(
    <section className={styles.heroSection}>
      <div>
        <h3>Venha conhecer nossas <br/> promoções</h3>
        <p><span>50% Off</span> nos produtos</p>
        <Button variant="yellow">
          Ver Produto
        </Button>
      </div>
    </section>
  )
}
