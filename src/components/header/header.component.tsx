import Navbar from "./navbar/navbar.component"
import "./header.scss"
import HeaderTop from "./headerTop/headerTop.component"
import HeaderMiddle from "./headerMiddle/headerMiddle.component"

export default function Header() {
  return(
    <header>
      <HeaderTop />
      <div className="line"></div>
      <HeaderMiddle />
      <div className="line"></div>
      <Navbar />
    </header>
  )
}