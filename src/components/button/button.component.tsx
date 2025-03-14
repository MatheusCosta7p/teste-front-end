import React from 'react';
import './button.scss';

interface ButtonProps {
  variant: 'yellow' | 'blue';
  width?: string;
  height?: string;
  text: string;
  textColor?: string;
}

const Button: React.FC<ButtonProps> = ({ variant, width = 'auto', height = 'auto', text, textColor }) => {
  return (
    <button
      className={`btn ${variant}`}
      style={{
        width,
        height,
        color: textColor || (variant === 'yellow' ? 'var(--yellow-text)' : 'var(--white)')
      }}
    >
      {text}
    </button>
  );
};

export default Button;
