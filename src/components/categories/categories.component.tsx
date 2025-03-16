import { JSX, useState } from "react";
import classNames from "classnames";
import styles from "./categories.module.scss";
import DeviceIcon from "./icons/device.icons";
import FashionIcon from "./icons/fashion.icons";
import HealthIcon from "./icons/health.icons";
import MarketIcon from "./icons/market.icons";
import RunIcon from "./icons/run.icons";
import ToolsIcon from "./icons/tools.icons";
import WhiskeyIcon from "./icons/whiskey.icons";

interface Category {
  key: string;
  icon: JSX.Element;
  label: string;
}

const categories: Category[] = [
  { key: "tecnologia", icon: <DeviceIcon />, label: "Tecnologia" },
  { key: "supermercado", icon: <MarketIcon />, label: "Supermercado" },
  { key: "bebidas", icon: <WhiskeyIcon />, label: "Bebidas" },
  { key: "ferramentas", icon: <ToolsIcon />, label: "Ferramentas" },
  { key: "saude", icon: <HealthIcon />, label: "Saúde" },
  { key: "esportes", icon: <RunIcon />, label: "Esportes e Fitness" },
  { key: "moda", icon: <FashionIcon />, label: "Moda" },
];

export function Categories() {
  const [activeCategory, setActiveCategory] = useState("tecnologia");

  const handleCategoryClick = (categoryKey: string) => {
    setActiveCategory(categoryKey);
  };

  return (
    <section className={styles.categoriesSection}>
      <div className={styles.categoriesGroup}>
        {categories.map((category) => (
          <div
            key={category.key}
            className={classNames(styles.category, {
              [styles.active]: activeCategory === category.key,
            })}
            onClick={() => handleCategoryClick(category.key)}
          >
            {category.icon}
            <p>{category.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
