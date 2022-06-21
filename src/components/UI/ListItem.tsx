import type { DetailedHTMLProps, HTMLAttributes } from "react";

export type ListItemProps = DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement>;

export const ListItem = ({ children, className, ...rest } : ListItemProps) => (
  <li {...rest} className={`list-item${className ? ` ${className}` : ''}`}>
    {children}
  </li>
);
export default ListItem;
