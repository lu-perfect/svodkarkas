import { Suspense } from 'react';

import AdvancedSearch from "app/projects/components/AdvancedSearch";
import ProjectCard from "app/projects/components/ProjectCard";

import Container from "components/UI/Container";

import styles from './styles.module.scss';

export type ProjectsPageProps = {
  projects: Array<Project>;
}

const ProjectsPage = ({ projects } : ProjectsPageProps) => (
  <section className={styles.root}>
    <Container>
      <h1 className="title">
        Наши проекты
      </h1>

      <AdvancedSearch/>

      <div className={styles.grid}>
        {projects.map((project) => (
          <div className={styles.cell} key={project.id}>
            <ProjectCard project={project}/>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default ProjectsPage;
