import type { HTMLAttributes, DetailedHTMLProps } from "react";

export type BoxProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const Box = ({ children, className, ...rest } : BoxProps) => (
  <div {...rest} className={`box${className ? ` ${className}` : ''}`}>
    {children}
  </div>
);
export default Box;
