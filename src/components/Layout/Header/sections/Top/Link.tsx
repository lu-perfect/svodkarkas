import type { ReactElement, HTMLAttributeAnchorTarget } from "react";

import ListItem from "components/UI/ListItem";
import Link from "components/UI/Link";

type HeaderLinkProps = {
  caption: string;
  icon: ReactElement;

  href: string;
  target?: HTMLAttributeAnchorTarget;
  rel?: string;

  tag?: keyof JSX.IntrinsicElements;
}

const HeaderLink = ({ caption, href, icon, tag: Tag = 'span', target, rel } : HeaderLinkProps) => (
  <ListItem>
    <Link href={href} className="link" target={target} rel={rel}>
      {icon}

      <Tag>{caption}</Tag>
    </Link>
  </ListItem>
);

export default HeaderLink;
