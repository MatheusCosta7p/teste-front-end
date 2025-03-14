import { InputSearch } from "../inputSearch/inputSearch.component"
import { Icon } from "../ui/Icon/Icon.ui"
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

        <div className="icons">
          <button>
            <Icon type="Group" />
          </button>
          <button>
            <Icon type="Heart" />
          </button>
          <button>
            <Icon type="UserCircle" />
          </button>
          <button>
            <Icon type="ShoppingCart" />
          </button>
        </div>
      </div>
    </>
  )

}