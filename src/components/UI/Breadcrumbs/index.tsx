import Link from "next/link";

import styles from './styles.module.scss';

export type BreadcrumbsProps = {
  links: Array<{ caption: string; href?: string; }>
}

const Breadcrumbs = ({ links } : BreadcrumbsProps) => (
  <ul className={styles.root}>
    {links.map((link) => (
      <li key={link.caption}>
        {link.href !== undefined
          ? (
            <Link href={link.href}>
              <a>
                {link.caption}
              </a>
            </Link>
          ) : (
            <span>
              {link.caption}
            </span>
          )}
      </li>
    ))}
  </ul>
);

export default Breadcrumbs;
