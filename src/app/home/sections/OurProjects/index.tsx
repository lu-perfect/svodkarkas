import Container from "components/UI/Container";
import Typography from "components/UI/Typography";
import ListItem from "components/UI/ListItem";
import List from "components/UI/List";

import ProjectCard from "app/projects/ProjectCard";
import AdvancedSearch from "components/AdvancedSearch";

const OurProjectsSection = ({ projects } : { projects: Array<Project> }) => (
  <section id="our-projects">
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
