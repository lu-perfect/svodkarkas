import Container from "components/UI/Container";

import ProjectCard from "app/projects/components/ProjectCard";

import AdvancedSearch from "app/projects/components/AdvancedSearch";

import styles from './styles.module.scss';

const OurProjectsSection = ({ projects } : { projects: Array<Project> }) => (
  <section id="our-projects" className={styles.root}>
    <Container>
      <p className="subtitle">
        Каркас
      </p>

      <h2 className="title">
        Наши проекты
      </h2>

      <Container className={styles.filtersWrapper}>
        <AdvancedSearch />
      </Container>

      <ul className={styles.projects}>
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </Container>
  </section>
);

export default OurProjectsSection;
