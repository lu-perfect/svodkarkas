import type { PropsWithChildren } from "react";

type ListProps = {
  className?: string;
}

export const List = ({ children, className } : PropsWithChildren<ListProps>) => (
  <ul className={`list${className ? ` ${className}` : ''}`}>
    {children}
  </ul>
);
export default List;
