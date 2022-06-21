import InternalLink from "components/UI/InternalLink";
import ListItem from "components/UI/ListItem";
import Button from "components/UI/Button";
import Icon from "components/UI/Icon";
import Link from "components/UI/Link";
import List from "components/UI/List";
import Box from "components/UI/Box";

import NavItem from "./Item";

import Logo from "../../../Logo";

export type NavProps = {
  menu: boolean;
  toggleMenu: () => void;
}

const Nav = ({ menu, toggleMenu  } : NavProps) => (
  <nav className={`navbar${menu ? ' active' : ''}`}>
    <Box className="navbar_top">
      <Link href="/" className="logo">
        <Logo />
      </Link>

      <Button className="menu-button" aria-label="Закрыть Меню" onClick={toggleMenu}>
        <Icon viewBox="0 0 100 100" width="28px" height="28px" className={menu ? ' is-open' : ''}>
          <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
          <path className="line line2" d="M 20,50 H 80" />
          <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
        </Icon>
      </Button>
    </Box>

    <Box className="navbar_bottom">
      <List className="navbar-list">
        <NavItem href="/projects" caption="Проекты"/>
        <NavItem href="/gallery" caption="Галерея"/>

        <ListItem className="dropdown">
          <InternalLink href="/services" className="navbar-link">
            Услуги
          </InternalLink>

          <Icon width="10" height="5" viewBox="0 0 11 6">
            <path d="M1.954.691A.9.9 0 00.846 2.11l4.096 3.203a.9.9 0 001.109 0l4.1-3.203A.9.9 0 109.043.691L5.497 3.46 1.954.691z" />
          </Icon>

          <List>
            <NavItem href="/services#design-services" caption="Проектирование"/>
            <NavItem href="/services#visit-object" caption="Посещение объекта"/>
            <NavItem href="/services#departure-specialist" caption="Выезд специалиста"/>
            <NavItem href="/services#turnkey-building" caption="Строительство под ключ"/>
            <NavItem href="/services#object-observation" caption="Отслеживание строительства"/>
            <NavItem href="/services#credit" caption="Дом в кредит"/>
          </List>
        </ListItem>

        <NavItem href="/contacts" caption="Контакты"/>
      </List>
    </Box>
  </nav>
);
export default Nav;
