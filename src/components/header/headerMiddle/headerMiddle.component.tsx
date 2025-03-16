import Input from "../../ui/input/input.ui";
import { Icon } from "../../ui/icon/Icon.ui";
import styles from "./headerMiddle.module.scss"

export default function HeaderMiddle() {
  return(
    <>
      <div className={styles.headerMiddle} >
        
        <a className={styles.logo} href="#">
          <img src="./images/Logo.svg" alt="" />
        </a>

        <div>
          <Input variant="search" type="search" placeholder="O que você está buscando?" icon="MagnifyingGlass"/>
        </div>
        <div className={styles.iconsGroup}>
          <button>
            <Icon className={styles.iconExpand} type="Expand" />
          </button>
          <button>
            <Icon className={styles.icon} type="Heart" />
          </button>
          <button>
            <Icon className={styles.icon} type="UserCircle" />
          </button>
          <button>
            <Icon className={styles.icon} type="ShoppingCart" />
          </button>
        </div>    
      </div>
    </>
  )
}