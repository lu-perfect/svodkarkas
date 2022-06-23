import type { HTMLAttributes, DetailedHTMLProps } from "react";

export type ContainerProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

import styles from './styles.module.scss';

export const Container = ({ children, className, ...rest } : ContainerProps) => (
  <div {...rest} className={`${styles.root}${className ? ` ${className}` : ''}`}>
    {children}
  </div>
);
export default Container;
