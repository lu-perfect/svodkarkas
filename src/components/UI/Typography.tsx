import { DetailedHTMLProps, HTMLAttributes } from "react";

export type TypographyElement = Merge<Merge<HTMLSpanElement, HTMLHeadingElement>, HTMLParagraphElement>;

export type TypographyProps = DetailedHTMLProps<HTMLAttributes<TypographyElement>, TypographyElement> & {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}

export const Typography = ({ children, tag: Tag = 'span', className, ...rest } : TypographyProps) => (
  <Tag className={`typography${className ? ` ${className}` : ''}`} {...rest}>
    {children}
  </Tag>
);
export default Typography;
