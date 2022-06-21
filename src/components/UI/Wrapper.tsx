import type { BoxProps } from "./Box";
import Box from "./Box";

export type WrapperProps = BoxProps;

export const Wrapper = ({ children, className, ...rest } : WrapperProps) => (
  <Box {...rest} className={`wrapper${className ? ` ${className}` : ''}`}>
    {children}
  </Box>
);
export default Wrapper;
