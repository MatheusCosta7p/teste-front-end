import { useState } from "react";
import classNames from "classnames";
import styles from "./_categories.module.scss";
import { Icon } from "../ui/Icon/Icon.ui";
import { ICategory } from "src/types/category.type";

const categories: ICategory[] = [
  { key: "tecnologia", icon: "Device", label: "Tecnologia" },
  { key: "supermercado", icon: "Market", label: "Supermercado" },
  { key: "bebidas", icon: "Whiskey", label: "Bebidas" },
  { key: "ferramentas", icon: "Tools", label: "Ferramentas" },
  { key: "saude", icon: "Health", label: "Saúde" },
  { key: "esportes", icon: "Run", label: "Esportes e Fitness" },
  { key: "moda", icon: "Fashion", label: "Moda" },
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
            <Icon type={category.icon} />
            <p>{category.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}