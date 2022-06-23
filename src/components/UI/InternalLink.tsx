import {AnchorHTMLAttributes, DetailedHTMLProps, ForwardedRef, useRef} from "react";

import NextLink from "next/link";

export type InternalLinkProps = Omit<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, 'href'> & {
  href: string;
};

export const InternalLink = ({ children, href, ...rest }: InternalLinkProps) => {
  const ref = useRef<HTMLAnchorElement>(null);

  return (
    <NextLink href={href}>
      <a {...rest} href={href} ref={ref}>
        {children}
      </a>
    </NextLink>
  );
}
export default InternalLink;
