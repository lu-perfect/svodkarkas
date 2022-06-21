import type { ReactElement, HTMLAttributeAnchorTarget } from "react";

import ListItem from "components/UI/ListItem";
import Link from "components/UI/Link";

export type InfoLinkProps = {
  caption: string;
  icon: ReactElement;

  href: string;
  target?: HTMLAttributeAnchorTarget;
  rel?: string;

  tag?: keyof JSX.IntrinsicElements;
}

const InfoLink = ({ caption, href, icon, tag: Tag = 'span', target, rel } : InfoLinkProps) => (
  <ListItem className="info-link">
    <Link href={href} className="info-link__link" target={target} rel={rel}>
      {icon}

      <Tag className="info-link__caption">{caption}</Tag>
    </Link>
  </ListItem>
);

export default InfoLink;
