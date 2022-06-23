import PackagesSection from "./sections/Packages";
import ProjectPlansSection from "./sections/ProjectPlans";
import ProjectInfoSection from "./sections/ProjectInfo";

export type ProjectPageProps = {
  project: ProjectViewDTO
}
const ProjectPage = ({ project } : ProjectPageProps) => (
  <>
    <ProjectInfoSection project={project} />

    <ProjectPlansSection project={project} />

    <PackagesSection project={project} />
  </>
);

export default ProjectPage;
