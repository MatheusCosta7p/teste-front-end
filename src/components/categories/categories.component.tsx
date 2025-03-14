import { useState } from "react";
import "./categories.scss";
import DeviceIcon from "./icons/device.icons";
import FashionIcon from "./icons/fashion.icons";
import HealthIcon from "./icons/health.icons";
import MarketIcon from "./icons/market.icons";
import RunIcon from "./icons/run.icons";
import ToolsIcon from "./icons/tools.icons";
import WhiskeyIcon from "./icons/whiskey.icons";

export function Categories() {
  const [activeCategory, setActiveCategory] = useState("tecnologia");

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <section className="categoriesSection">
      <div className="categoriesGroup">
      <div
        className={`category ${activeCategory === "tecnologia" ? "active" : ""}`}
        onClick={() => handleCategoryClick("tecnologia")}
      >
        <DeviceIcon />
        <p>Tecnologia</p>
      </div>
      <div
        className={`category ${activeCategory === "supermercado" ? "active" : ""}`}
        onClick={() => handleCategoryClick("supermercado")}
      >
        <MarketIcon />
        <p>Supermercado</p>
      </div>
      <div
        className={`category ${activeCategory === "bebidas" ? "active" : ""}`}
        onClick={() => handleCategoryClick("bebidas")}
      >
        <WhiskeyIcon />
        <p>Bebidas</p>
      </div>
      <div
        className={`category ${activeCategory === "ferramentas" ? "active" : ""}`}
        onClick={() => handleCategoryClick("ferramentas")}
      >
        <ToolsIcon />
        <p>Ferramentas</p>
      </div>
      <div
        className={`category ${activeCategory === "saude" ? "active" : ""}`}
        onClick={() => handleCategoryClick("saude")}
      >
        <HealthIcon />
        <p>Saúde</p>
      </div>
      <div
        className={`category ${activeCategory === "esportes" ? "active" : ""}`}
        onClick={() => handleCategoryClick("esportes")}
      >
        <RunIcon />
        <p>Esportes e Fitness</p>
      </div>
      <div
        className={`category ${activeCategory === "moda" ? "active" : ""}`}
        onClick={() => handleCategoryClick("moda")}
      >
        <FashionIcon />
        <p>Moda</p>
      </div>
    </div>
    </section>
  );
}
