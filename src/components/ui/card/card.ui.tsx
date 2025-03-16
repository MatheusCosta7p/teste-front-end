import { ReactNode } from "react";
import classNames from "classnames";
import styles from "../../../assets/styles/components/ui/Card.module.scss";

interface CardProps {
  children: ReactNode;
  variant?: "default" | "product"; 
  className?: string;
}

export function Card({ children, variant = "default", className }: CardProps) {
  return (
    <div className={classNames(styles.card, styles[`card--${variant}`], className)}>
      {children}
    </div>
  );
}
