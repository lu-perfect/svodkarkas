import type { DetailedHTMLProps, HTMLAttributes } from "react";

export type ButtonProps = DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  caption?: string;

  type?: 'button' | 'submit';

  variant?: 'slider' | 'outline';
};

export const Button = ({ children, type = 'button', className, caption, variant, ...rest } : ButtonProps) => (
  <button
    {...rest}
    type={type}
    className={`button${className ? ` ${className}` : ''}${variant ? ` ${variant}` : ''}`}
  >
    {caption || children}
  </button>
);
export default Button;
