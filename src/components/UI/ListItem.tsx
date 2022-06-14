import type { PropsWithChildren } from "react";

type ListItemProps = {
  className?: string;
}

export const ListItem = ({ children, className } : PropsWithChildren<ListItemProps>) => (
  <li className={`list-item${className ? ` ${className}` : ''}`}>
    {children}
  </li>
);
export default ListItem;
