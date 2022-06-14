import type { NextPage } from 'next'

import AdvancedSearch from "components/AdvancedSearch";
import ProjectCard from "components/cards/Project";

import Typography from "components/UI/Typography";
import Container from "components/UI/Container";
import Layout from 'components/Layout';
import Box from "components/UI/Box";

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
};

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
];

const ProjectsPage: NextPage = () => {
  return (
    <Layout>
      <section className="projects">
        <Container>
          <Typography tag="h2" className="h2 title">
            Наши проекты
          </Typography>

          <AdvancedSearch />

          <Box className="projects-grid">
            {projects.map((project) => (
              <Box className="item" key={project.id}>
                <ProjectCard project={project} />
              </Box>
            ))}
          </Box>
        </Container>
      </section>
    </Layout>
  )
}

export default ProjectsPage;
