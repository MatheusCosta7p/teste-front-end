import { useState } from "react";
import "./navbar.scss";
import { Icon } from "../../ui/Icon/Icon.ui";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("ofertas");

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <nav>
      <ul>
        <li>
          <a
            href="#"
            className={activeLink === "todas-categorias" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("todas-categorias");
            }}
          >
            Todas Categorias
          </a>
        </li>
        <li>
          <a
            href="#"
            className={activeLink === "supermercado" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("supermercado");
            }}
          >
            Supermercado
          </a>
        </li>
        <li>
          <a
            href="#"
            className={activeLink === "livros" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("livros");
            }}
          >
            Livros
          </a>
        </li>
        <li>
          <a
            href="#"
            className={activeLink === "moda" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("moda");
            }}
          >
            Moda
          </a>
        </li>
        <li>
          <a
            href="#"
            className={activeLink === "lancamentos" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("lancamentos");
            }}
          >
            Lançamentos
          </a>
        </li>
        <li>
          <a
            href="#"
            className={activeLink === "ofertas" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("ofertas");
            }}
          >
            Ofertas do Dia
          </a>
        </li>
        <li>
          <a
            href="#"
            className={activeLink === "assinatura" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("assinatura");
            }}
          >
            <Icon type="CrownSimple" className="icon"/> Assinatura
          </a>
        </li>
      </ul>
    </nav>
  );
}
