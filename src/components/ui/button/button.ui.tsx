import React from 'react';
import styles from "../../../assets/styles/components/ui/Button.module.scss"
import classNames from 'classnames';

interface ButtonProps {
  variant: "yellow" | "blue" | "default";
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ variant = "yellow",  children, className }) => {
  return (
    <button
      className={classNames(
        styles.btn,
        variant && styles[`btn--${variant}`],
        className
      )}>
      {children}
    </button>
  );
};
export default Button;
