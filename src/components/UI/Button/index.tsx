import type { DetailedHTMLProps, HTMLAttributes } from "react";

import styles from './styles.module.scss';

export type ButtonProps = DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  caption?: string;

  type?: 'button' | 'submit';

  variant?: 'slider' | 'outline';
};

export const Button = ({ children, type = 'button', className, caption, variant, ...rest } : ButtonProps) => (
  <button
    {...rest}
    type={type}
    className={`${styles.button}${className ? ` ${className}` : ''}${variant ? ` ${styles[variant]}` : ''}`}
  >
    {caption || children}
  </button>
);
export default Button;
