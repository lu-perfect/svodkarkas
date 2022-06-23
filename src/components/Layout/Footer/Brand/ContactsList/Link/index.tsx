import type { ReactElement } from "react";

import styles from "./styles.module.scss";

export type ContactsListLinkProps = {
  icon: ReactElement;
  caption: string;
  href: string;
}

const ContactsListLink = ({ href, caption, icon } : ContactsListLinkProps) => (
  <li>
    <a href={href} className={styles.root}>
      {icon}

      <span>{caption}</span>
    </a>
  </li>
);

export default ContactsListLink;
