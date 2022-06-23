import packages from "./packages";
import projects, { mainProjects } from "./projects";
import * as math from "mathjs";
import getProjectPrice from "../utils/getProjectPrice";

type IData = {
  packages: Packages,
  projects: Array<Project & {
    prices: Array<number>,
    terraceAndBalconyArea: string,
  }>,
  mainProjects: Array<Project>,
}

export const data: IData = {
  packages,
  projects: projects.map((project) => ({
    ...project,
    prices: [
      getProjectPrice(project, 1),
      getProjectPrice(project, 2),
      getProjectPrice(project, 3)
    ].map((e) => Math.ceil(e / 1000) * 1000),
    terraceAndBalconyArea: math.format(
      math.add(project.area.terrace ?? 0, project.area.balcony ?? 0), { precision: 14 }
    ),
  })),
  mainProjects,
}
export default data;
