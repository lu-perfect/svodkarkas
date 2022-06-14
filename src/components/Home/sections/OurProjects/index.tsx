import Container from "components/UI/Container";
import Typography from "components/UI/Typography";
import ListItem from "components/UI/ListItem";
import List from "components/UI/List";

import ProjectCard from "components/cards/Project";
import AdvancedSearch from "components/AdvancedSearch";

const mockProject = {
  id: 'shine',
  title: 'Сияние',

  preview: 'Двухэтажный дом с мансардным вторым этажом и ломаной крышей выполнен в классическом стиле.',
  description: 'Двухэтажный дом с мансардным вторым этажом и ломаной крышей выполнен в классическом стиле и предлагает все необходимое для комфортного проживания семьи из 3-4 человек.',

  tags: [ 'Современный Стиль', 'Терраса', 'Балкон' ],

  facades: 4,
  floors: 2,

  isPopular: true,
  isSale: true,

  price: 8451000,

  bedrooms: 4,
  bathrooms: 2,
}

const projects = [
  mockProject,
  mockProject,
  mockProject,
  mockProject,
  mockProject,
  mockProject,
  mockProject,
  mockProject,
  mockProject,
]

const OurProjectsSection = () => (
  <section className="our-projects">
    <Container>
      <Typography tag="p" className="subtitle">
        Каркас
      </Typography>

      <Typography tag="h2" className="h2 title">
        Наши проекты
      </Typography>

      <Container className="important">
        <AdvancedSearch />
      </Container>

      <List className="has-scrollbar">
        {projects.map((project) => (
          <ListItem key={project.id}>
            <ProjectCard project={project} />
          </ListItem>
        ))}
      </List>
    </Container>
  </section>
);

export default OurProjectsSection;
