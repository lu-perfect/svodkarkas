import type { DetailedHTMLProps, HTMLAttributes } from "react";

export type ListProps = DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>;

export const List = ({ children, className, ...rest } : ListProps) => (
  <ul {...rest} className={`list${className ? ` ${className}` : ''}`}>
    {children}
  </ul>
);
export default List;
