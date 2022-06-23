import Container from "components/UI/Container";

import ServiceCard from "./ServiceCard";

import styles from './styles.module.scss';

import services from "./services.data";

const TurnKeySection = () => (
  <section id="turnkey" className={styles.root}>
    <Container>
      <p className="subtitle">Наши услуги</p>

      <h2 className="title">
        Дом под ключ
      </h2>

      <ul className={styles.list}>
        {services.map((service) => (
          <li key={service.title}>
            <ServiceCard key={service.title} {...service} />
          </li>
        ))}
      </ul>
    </Container>
  </section>
);
export default TurnKeySection;
