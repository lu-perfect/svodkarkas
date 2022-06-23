import Container from "components/UI/Container";

import servicesData from "./services.data";
import ServiceCard from "./Card";

import styles from './styles.module.scss';

const ServicesSection = () =>(
  <section className={styles.root}>
    <Container>
      {servicesData.map((service) => (
        <ServiceCard key={service.filename} {...service}>
          {service.content}
        </ServiceCard>
      ))}
    </Container>
  </section>
)

export default ServicesSection;
