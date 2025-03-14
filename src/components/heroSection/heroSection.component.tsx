import Button from "../button/button.component"
import "./heroSection.scss"

export function HeroSection (){
  return(
    <div className="heroSection">
      <div>
        <h3>Venha conhecer nossas <br/> promoções</h3>
        <p><span>50% Off</span> nos produtos</p>
        <Button variant="yellow" text="Ver Produto" width="12.875rem" height="3.125rem"/>
      </div>
    </div>
  )
}