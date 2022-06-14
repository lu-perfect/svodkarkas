import type { PropsWithChildren } from "react";

type ButtonProps = {
  caption?: string;
  className?: string;

  type?: 'button' | 'submit';

  variant?: 'slider';

  onClick?: () => void;

  'aria-label'?: string;
}

export const Button = ({ children, type = 'button', className, caption, variant, onClick, 'aria-label': ariaLabel } : PropsWithChildren<ButtonProps>) => (
  <button type={type} className={`button${className ? ` ${className}` : ''}${variant ? ` ${variant}` : ''}`} aria-label={ariaLabel} onClick={onClick}>
    {caption || children}
  </button>
);
export default Button;
