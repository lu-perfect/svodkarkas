import { useRef } from "react";

import NextLink from "next/link";

import type { LinkProps } from "./Link";
import Link from "./Link";

export type InternalLinkProps = LinkProps;

export const InternalLink = ({ children, href, ...rest }: InternalLinkProps) => {
  const ref = useRef<HTMLAnchorElement>(null);

  return (
    <NextLink href={href}>
      <Link {...rest} href={href} ref={ref}>
        {children}
      </Link>
    </NextLink>
  );
}
export default InternalLink;
