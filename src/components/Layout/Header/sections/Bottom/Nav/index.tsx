import Link from "components/UI/Link";
import List from "components/UI/List";
import Button from "components/UI/Button";
import Box from "components/UI/Box";

import NavItem from "./Item";

const Nav = () => (
  <nav className="navbar">
    <Box className="navbar_top">
      <Link href="/" className="logo">
        <img src="/images/logo.png" alt="Логотип компании"/>
      </Link>

      <Button className="close-button" aria-label="Закрыть Меню">
        close-outline
      </Button>
    </Box>

    <Box className="navbar_bottom">
      <List className="navbar-list">
        <NavItem href="/projects" caption="Проекты"/>
        <NavItem href="/gallery" caption="Галерея"/>
        <NavItem href="/services" caption="Услуги"/>
        <NavItem href="/credit" caption="Кредит"/>
        <NavItem href="/contacts" caption="Контакты"/>
      </List>
    </Box>
  </nav>
);
export default Nav;
