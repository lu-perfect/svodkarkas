import type { PropsWithChildren, HTMLAttributeAnchorTarget } from "react";

export type LinkProps = {
  href: string;
  className?: string;

  target?: HTMLAttributeAnchorTarget;
  rel?: string;
}

export const Link = ({ href, target, rel, children, className } : PropsWithChildren<LinkProps>) => (
  <a
    href={href}
    target={target} rel={rel}
    className={`link${className ? ` ${className}` : ''}`}
  >
    {children}
  </a>
);
export default Link;
