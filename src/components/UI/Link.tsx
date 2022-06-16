import type { PropsWithChildren, HTMLAttributeAnchorTarget, ForwardedRef } from "react";
import {forwardRef} from "react";

export type LinkProps = {
  href: string;
  className?: string;

  target?: HTMLAttributeAnchorTarget;
  rel?: string;
}

export const Link = ({ innerRef, href, target, rel, children, className } : PropsWithChildren<LinkProps> & { innerRef?: ForwardedRef<HTMLAnchorElement> }) => (
  <a
    ref={innerRef}
    href={href}
    target={target} rel={rel}
    className={`link${className ? ` ${className}` : ''}`}
  >
    {children}
  </a>
);
const component = forwardRef<HTMLAnchorElement, PropsWithChildren<LinkProps>>((props, ref) => <Link innerRef={ref} {...props} />);
component.displayName = 'Link';

export default component;
