import React from 'react';
import styles from "../../../assets/styles/components/ui/_input.module.scss";
import classNames from "classnames";
import { TUiIconTypes } from '../icon/icon-types.enum';
import { Icon } from '../../ui/icon/Icon.ui';

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
