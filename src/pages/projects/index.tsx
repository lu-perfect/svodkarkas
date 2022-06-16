import type { NextPage } from 'next'

import AdvancedSearch from "components/AdvancedSearch";
import ProjectCard from "components/cards/Project";

import Typography from "components/UI/Typography";
import Container from "components/UI/Container";
import Layout from 'components/Layout';
import Box from "components/UI/Box";

import useProjectSearch from "store/ProjectSearch/hooks";

const ProjectsPage: NextPage = () => {
  const { filteredProjects } = useProjectSearch();

  return (
    <Layout>
      <section className="projects">
        <Container>
          <Typography tag="h2" className="h2 title">
            Наши проекты
          </Typography>

          <AdvancedSearch />

          <Box className="projects-grid">
            {filteredProjects.map((project) => (
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
