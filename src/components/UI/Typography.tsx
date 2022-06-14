import type { PropsWithChildren } from "react";

type TypographyProps = {
  className?: string;

  tag?: keyof JSX.IntrinsicElements;
}

export const Typography = ({ children, tag: Tag = 'span', className } : PropsWithChildren<TypographyProps>) => (
  <Tag className={`typography${className ? ` ${className}` : ''}`}>
    {children}
  </Tag>
);
export default Typography;
