import { Icon } from "../ui/Icon/Icon.ui";
import "./headerTop.scss"

export default function HeaderTop() {
  return(
    <>
    <div className="headerTop">
      <p className="headerTopText">
        <Icon type="ShieldCheck" className="icons"/>compra <span className="headerTopSpan"> 100% segura</span>
      </p>
      <p className="headerTopText">
        <Icon type="Truck" className="icons"/><span className="headerTopSpan">Frete grátis</span> acima de R$ 200 
      </p>
      <p className="headerTopText">
        <Icon type="CreditCard" className="icons"/><span className="headerTopSpan">Parcele</span> suas compras
      </p>
    </div>
  </>
  )
}