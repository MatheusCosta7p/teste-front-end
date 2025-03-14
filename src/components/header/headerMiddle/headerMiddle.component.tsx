import { InputSearch } from "../../inputSearch/inputSearch.component";
import { Icon } from "../../ui/Icon/Icon.ui";
import "./headerMiddle.scss"

export default function HeaderMiddle() {
  return(
    <>
      <div className="headerMiddle">
        <div>
          <img src="./images/Logo.svg" alt="Logo Econverse"/>
        </div>

        <div>
          <InputSearch />
        </div>

        <div className="iconsGroup">
          <button>
            <Icon className="iconExpand" type="Expand" />
          </button>
          <button>
            <Icon className="icon" type="Heart" />
          </button>
          <button>
            <Icon className="icon" type="UserCircle" />
          </button>
          <button>
            <Icon className="icon" type="ShoppingCart" />
          </button>
        </div>
        
      </div>
    </>
  )

}