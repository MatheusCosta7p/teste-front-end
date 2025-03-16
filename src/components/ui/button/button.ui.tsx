import React from 'react';
import styles from "../../../assets/styles/components/ui/_button.module.scss";
import classNames from 'classnames';

interface ButtonProps {
  variant: "yellow" | "blue" | "default" | "outline" | "quantity"; 
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ variant = "yellow", children, className, onClick, disabled = false }) => {
  return (
    <button
      onClick={!disabled ? onClick : undefined}
      className={classNames(
        styles.btn,
        variant && styles[`btn--${variant}`],
        { [styles.disabled]: disabled },
        className
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
