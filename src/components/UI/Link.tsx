import type { DetailedHTMLProps, ForwardedRef, AnchorHTMLAttributes } from "react";
import { forwardRef } from "react";

export type LinkProps = Omit<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, 'href'> & {
  innerRef?: ForwardedRef<HTMLAnchorElement>
  href: string;
};

export const Link = ({ innerRef, href, target, rel, children, className } : LinkProps) => (
  <a
    ref={innerRef}
    href={href}
    target={target} rel={rel}
    className={`link${className ? ` ${className}` : ''}`}
  >
    {children}
  </a>
);
const component = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) =>
  <Link innerRef={ref} {...props} />
);
component.displayName = 'Link';

export default component;
