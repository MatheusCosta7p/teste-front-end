import styles from "../../assets/styles/components/Header.module.scss"
import HeaderTop from "./headerTop/headerTop.component"
import HeaderMiddle from "./headerMiddle/headerMiddle.component"
import HeaderBottom from "./headerBottom/headerBottom.component"

export default function Header() {
  return(
    <header>
      <HeaderTop />
      <div className={styles.line}></div>
      <HeaderMiddle />
      <div className={styles.line}></div>
      <HeaderBottom />
    </header>
  )
}