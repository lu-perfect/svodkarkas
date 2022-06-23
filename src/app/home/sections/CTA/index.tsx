import Container from "components/UI/Container";
import Button from "components/UI/Button";
import Icon from "components/UI/Icon";

import styles from './styles.module.scss';

const CTASection = () => (
  <section id="cta" className={styles.root}>
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Ищете дом мечты?
          </h2>

          <p className={styles.text}>
            Мы поможем вам реализовать вашу мечту о новом доме.
          </p>
        </div>

        <Button variant="slider" className={styles.button}>
          <span>Получить Консультацию</span>

          <Icon viewBox="64 64 896 896">
            <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"/>
          </Icon>
        </Button>
      </div>
    </Container>
  </section>
);
export default CTASection;
