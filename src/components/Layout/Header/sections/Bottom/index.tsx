import Container from "components/UI/Container";
import InternalLink from "components/UI/InternalLink";

import Logo from "../../Logo";
import Nav from "./Nav";
import Actions from "./Actions";

import styles from './styles.module.scss';

export type BottomSectionProps = {
  isFixed: boolean;
  menu: boolean;
  toggleMenu: () => void;
}

const BottomSection = ({ isFixed, menu, toggleMenu } : BottomSectionProps) => (
  <section className={`${styles.root}${isFixed ? ` ${styles.fixed}` : ''}`}>
    <Container className={styles.container}>
      <InternalLink href="/">
        <Logo/>
      </InternalLink>

      <Nav menu={menu} toggleMenu={toggleMenu}/>

      <Actions menu={menu} toggleMenu={toggleMenu}/>
    </Container>
  </section>
);
export default BottomSection;
