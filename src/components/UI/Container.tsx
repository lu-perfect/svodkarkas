import type { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";

export const Container = ({ children, className, ...rest } : PropsWithChildren<{ className?: string }> & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => (
  <div {...rest} className={`container${className ? ` ${className}` : ''}`}>
    {children}
  </div>
);
export default Container;
