import { useState } from "react";
import Button from "../../ui/button/button.ui";
import styles from "./_filter.module.scss";

const filterOption = [
  { title: "celular" },
  { title: "acessórios" },
  { title: "tablets" },
  { title: "notebooks" },
  { title: "tvs" },
  { title: "ver todos" },
];

export default function Filter() {
  const [activeOption, setActiveOption] = useState("celular");

  const formatTitle = (title: string) => {
    return title.toUpperCase();
  };

  return (
    <div className={styles.filterOption}>
      {filterOption.map((option) => (
        <Button
          variant="default"
          key={option.title}
          className={`${styles.button} ${
            activeOption === option.title ? styles.active : ""
          }`}
          onClick={() => setActiveOption(option.title)}
        >
          {formatTitle(option.title)}
        </Button>
      ))}
    </div>
  );
}
