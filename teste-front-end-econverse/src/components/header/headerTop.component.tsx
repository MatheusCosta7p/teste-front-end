import { Icon } from "../ui/Icon/Icon.ui";
import "./headerTop.scss"

export default function HeaderTop() {
  return(
    <>
    <div className="headerTop">
      <p>
        <Icon type="ShieldCheck" className="icons"/>compra <span> 100% segura</span>
      </p>
      <p>
        <Icon type="Truck" className="icons"/><span>Frete grátis</span> acima de R$ 200 
      </p>
      <p>
        <Icon type="CreditCard" className="icons"/><span>Parcele</span> suas compras
      </p>
    </div>
  </>
  )
}