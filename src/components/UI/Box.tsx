import type { PropsWithChildren, CSSProperties } from "react";

type BoxProps = {
  id?: string;
  className?: string;

  style?: CSSProperties;
}

export const Box = ({ children, id, style, className } : PropsWithChildren<BoxProps>) => (
  <div id={id} className={`box${className ? ` ${className}` : ''}`} style={style}>
    {children}
  </div>
);
export default Box;
