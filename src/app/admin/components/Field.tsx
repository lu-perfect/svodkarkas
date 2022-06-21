import type { PropsWithChildren } from "react";

import Typography from "components/UI/Typography";
import Box from "components/UI/Box";

export type AdminFormFieldProps = PropsWithChildren<{
  label: string;
  className?: string;
}>;

export const AdminFormField = ({ children, className, label } : AdminFormFieldProps) => (
  <Box className={`admin-field${className ? ` ${className}` : ''}`}>
    <Typography tag="h3" className="admin-field__label">{label}</Typography>

    {children}
  </Box>
);
export default AdminFormField;
