import { useRouter } from "next/router";
import Link from "next/link";

import Icon from "components/UI/Icon";

import styles from './styles.module.scss';

export type NavItemProps = {
  href: string;
  caption: string;
  sublinks?: Array<NavItemProps>,
}

const NavItem = ({ href, caption, sublinks } : NavItemProps) => {
  const router = useRouter();

  return (
    <li className={`${styles.root}${sublinks && sublinks.length > 0 ? ` ${styles.dropdown}` : ''}`}>
      {router.pathname !== href || (sublinks && sublinks.length > 0) ? (
        <Link href={href}>
          <a>
            {caption}
          </a>
        </Link>
      ) : (
        <span>
          {caption}
        </span>
      )}

      {sublinks && sublinks.length > 0 && (
        <>
          <Icon width="10" height="5" viewBox="0 0 11 6">
            <path d="M1.954.691A.9.9 0 00.846 2.11l4.096 3.203a.9.9 0 001.109 0l4.1-3.203A.9.9 0 109.043.691L5.497 3.46 1.954.691z" />
          </Icon>

          <ul>
            {sublinks.map((link) => (
              <NavItem key={link.href} {...link} />
            ))}
          </ul>
        </>
      )}
    </li>
  );
}
export default NavItem;
