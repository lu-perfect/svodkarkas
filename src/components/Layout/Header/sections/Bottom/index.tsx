import Container from "components/UI/Container";
import InternalLink from "components/UI/InternalLink";

import Logo from "../../Logo";
import Nav from "./Nav";
import Actions from "./Actions";

const BottomSection = () => (
  <section className="header_bottom">
    <Container>
      <InternalLink href="/">
        <Logo />
      </InternalLink>

      <Nav />

      <Actions />
    </Container>
  </section>
);
export default BottomSection;
