import type { NextPage } from 'next'

import Layout from 'components/Layout';

import Content from 'app/projects/pages/projects/page';
import { useAppSelector } from "../../hooks/redux";
import { selectProjects } from "../../app/projects/store/selectors";

const ProjectsPage: NextPage = () => {
  const projects = useAppSelector(selectProjects);

  return (
    <Layout>
      <Content projects={projects} />
    </Layout>
  )
}

export default ProjectsPage;
