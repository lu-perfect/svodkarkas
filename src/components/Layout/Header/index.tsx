import { useState } from "react";

import TopSection from "./sections/Top";
import BottomSection from "./sections/Bottom";

import styles from './styles.module.scss';

export type HeaderProps = {
  isFixed: boolean;
}

function Header({ isFixed } : HeaderProps) {
  const [menu, setMenu] = useState(false);

  function toggleMenu() {
    setMenu(!menu);
  }

  return (
    <header className={styles.root}>
      <div className={`${styles.overlay}${menu ? ` ${styles.active}` : ''}`} />

      <TopSection />

      <BottomSection isFixed={isFixed} toggleMenu={toggleMenu} menu={menu} />
    </header>
  );
}

export default Header;
