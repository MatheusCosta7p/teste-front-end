import { ReactNode } from "react";
import classNames from "classnames";
import styles from "./_card.module.scss";

interface CardProps {
  children: ReactNode;
  variant?: "default" | "product" | "partner"; 
  className?: string;
}

export function Card({ children, variant = "default", className }: CardProps) {
  return (
    <div className={classNames(styles.card, styles[`card--${variant}`], className)}>
      {children}
    </div>
  );
}
