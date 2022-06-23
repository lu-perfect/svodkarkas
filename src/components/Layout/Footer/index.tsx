import Container from "components/UI/Container";

import Brand from "./Brand";
import Widgets from "./Widgets";

import styles from './styles.module.scss';

const Footer = () => (
  <footer className={styles.root}>
    <Container className={styles.container}>
      <Brand />

      <Widgets />
    </Container>
  </footer>
);

export default Footer;
