import type { PropsWithChildren } from "react";

type ListItemProps = {
  className?: string;
  onClick?: () => void;
}

export const ListItem = ({ children, className, onClick } : PropsWithChildren<ListItemProps>) => (
  <li className={`list-item${className ? ` ${className}` : ''}`} {...(onClick ? { onClick } : {})}>
    {children}
  </li>
);
export default ListItem;
