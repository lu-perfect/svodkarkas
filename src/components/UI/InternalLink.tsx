import NextLink from "next/link";

import type { PropsWithChildren } from "react";

import type { LinkProps } from "./Link";
import Link from "./Link";

export const InternalLink = ({ children, ...props }: PropsWithChildren<LinkProps>) => (
  <NextLink href={props.href}>
    <Link {...props}>
      {children}
    </Link>
  </NextLink>
);
export default InternalLink;
