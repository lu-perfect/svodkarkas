import { useState } from "react";

import Container from "components/UI/Container";
import InternalLink from "components/UI/InternalLink";

import Logo from "../../Logo";
import Nav from "./Nav";
import Actions from "./Actions";

const BottomSection = () => {
  const [menu, setMenu] = useState(false);

  function toggleMenu() {
    setMenu(!menu);
  }

  return (
    <section className="bottom-header">
      <Container className="bottom-header__container">
        <InternalLink href="/">
          <Logo />
        </InternalLink>

        <Nav menu={menu} toggleMenu={toggleMenu} />

        <Actions menu={menu} toggleMenu={toggleMenu} />
      </Container>
    </section>
  );
}
export default BottomSection;
