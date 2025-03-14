import HeaderTop from "./headerTop.component"
import HeaderMiddle from "./headerMiddle.component"
import Navbar from "./navbar.component"
import "./header.scss"

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