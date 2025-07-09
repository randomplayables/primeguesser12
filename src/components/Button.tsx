import React from 'react';

interface ButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ onClick, disabled = false, children, type = 'button' }) => (
  <button type={type} className="button" onClick={onClick} disabled={disabled}>
    {children}
  </button>
);

export default Button;
