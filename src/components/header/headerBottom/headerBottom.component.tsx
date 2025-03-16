import { useState } from "react";
import styles from "./headerBottom.module.scss";
import { Icon } from "../../ui/icon/Icon.ui";

export default function HeaderBottom() {
  const [activeLink, setActiveLink] = useState("ofertas");

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <a
            href="#"
            className={activeLink === "todas-categorias" ? styles.active : ""}
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
            className={activeLink === "supermercado" ? styles.active : ""}
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
            className={activeLink === "livros" ? styles.active : ""}
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
            className={activeLink === "moda" ? styles.active : ""}
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
            className={activeLink === "lancamentos" ? styles.active : ""}
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
            className={activeLink === "ofertas" ? styles.active : ""}
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
            className={activeLink === "assinatura" ? styles.active : ""}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("assinatura");
            }}
          >
            <Icon type="CrownSimple" className={styles.icon}/> Assinatura
          </a>
        </li>
      </ul>
    </nav>
  );
}
