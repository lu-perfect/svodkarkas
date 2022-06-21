import type { HTMLAttributes, DetailedHTMLProps } from "react";

export type AdminFormProps = DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement>;

export const AdminForm = ({ children, className, ...rest } : AdminFormProps) => (
  <form {...rest} className={`admin-form${className ? ` ${className}` : ''}`}>
    {children}
  </form>
);
export default AdminForm;
