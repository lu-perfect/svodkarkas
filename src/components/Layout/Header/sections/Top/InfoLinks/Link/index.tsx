import type { ReactElement, HTMLAttributeAnchorTarget } from "react";

import styles from './styles.module.scss';

export type InfoLinkProps = {
  caption: string;
  icon: ReactElement;

  href: string;
  target?: HTMLAttributeAnchorTarget;
  rel?: string;

  tag?: keyof JSX.IntrinsicElements;
}

const InfoLink = ({ caption, href, icon, tag: Tag = 'span', target, rel } : InfoLinkProps) => (
  <li className={styles.root}>
    <a href={href} target={target} rel={rel}>
      {icon}

      <Tag className={styles.caption}>{caption}</Tag>
    </a>
  </li>
);

export default InfoLink;
