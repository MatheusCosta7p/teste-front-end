import { Icon } from "../ui/Icon/Icon.ui"
import "./inputSearch.scss"

export function InputSearch () {
  return(
    <>
      <div className="inputSearch">
        <input type="search" placeholder="O que você está buscando?"/>
        <Icon type="MagnifyingGlass" className="icon"/>
      </div>
    </>
  )
}