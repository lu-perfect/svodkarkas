import Typography from "components/UI/Typography";
import Container from "components/UI/Container";
import ListItem from "components/UI/ListItem";
import List from "components/UI/List";

import ServiceCard from "./ServiceCard";

import services from "./services.data";

const TurnKeySection = () => (
  <section id="turnkey">
    <Container>
      <Typography tag="p" className="subtitle">Наши услуги</Typography>

      <Typography tag="h2" className="h2 title">
        Дом под ключ
      </Typography>

      <List className="services-list">
        {services.map((service) => (
          <ListItem key={service.title}>
            <ServiceCard key={service.title} {...service} />
          </ListItem>
        ))}
      </List>
    </Container>
  </section>
);
export default TurnKeySection;
