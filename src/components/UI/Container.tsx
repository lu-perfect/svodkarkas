import type { BoxProps } from "./Box";

export type ContainerProps = BoxProps;

import styles from './Container.module.scss';

export const Container = ({ children, className, ...rest } : ContainerProps) => (
  <div {...rest} className={`${styles.root}${className ? ` ${className}` : ''}`}>
    {children}
  </div>
);
export default Container;
