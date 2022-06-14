import type { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";

export const Wrapper = ({ children, className, ...rest } : PropsWithChildren<{ className?: string }> & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => (
  <div {...rest} className={`wrapper${className ? ` ${className}` : ''}`}>
    {children}
  </div>
);
export default Wrapper;
