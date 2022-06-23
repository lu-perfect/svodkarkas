import NavbarHeader from "./Header";
import NavLinks from "./Links";

import styles from './styles.module.scss';

export type NavProps = {
  menu: boolean;
  toggleMenu: () => void;
}

const Nav = ({ menu, toggleMenu  } : NavProps) => (
  <nav className={`${styles.root}${menu ? ` ${styles.active}` : ''}`}>
    <NavbarHeader menu={menu} toggleMenu={toggleMenu} />

    <NavLinks />
  </nav>
);
export default Nav;
