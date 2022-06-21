import InternalLink from "components/UI/InternalLink";

export type WidgetItemProps = {
  href?: string;
  caption: string;
}

import styles from './styles.module.scss';

const WidgetItem = ({ href, caption } : WidgetItemProps) => (
  <li>
    {href
      ? (
        <InternalLink href={href} className={styles.link}>{caption}</InternalLink>
      ) : (
        <p className={styles.header}>{caption}</p>
      )}
  </li>
);

export default WidgetItem;
