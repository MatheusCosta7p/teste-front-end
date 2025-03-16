import React from 'react';
import { Icon, TUiIconTypes } from "../Icon/Icon.ui";
import styles from "../../../assets/styles/components/ui/Input.module.scss";
import classNames from "classnames";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "search"; 
  icon?: TUiIconTypes; 
  className?: string;
}

const Input: React.FC<InputProps> = ({
  variant = "default",
  icon,
  className,
  type,
  placeholder,
  ...props
}) => {
  return (
    <div className={classNames(styles.input, styles[`input--${variant}`], className)}>
      <input
        type={type}
        placeholder={placeholder}
        {...props} 
      />
      {icon && <Icon type={icon} className={styles.icon} />} 
    </div>
  );
};

export default Input;
