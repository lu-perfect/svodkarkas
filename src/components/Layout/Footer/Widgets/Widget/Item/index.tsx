import Link from "next/link";

export type WidgetItemProps = {
  href?: string;
  caption: string;
}

import styles from './styles.module.scss';

const WidgetItem = ({ href, caption } : WidgetItemProps) => (
  <li className={styles.root}>
    {href
      ? (
        <Link href={href}>
          <a>
            {caption}
          </a>
        </Link>
      ) : (
        <p className={styles.header}>{caption}</p>
      )}
  </li>
);

export default WidgetItem;
