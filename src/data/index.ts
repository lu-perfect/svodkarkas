import packages from "./packages";
import projects, { mainProjects } from "./projects";
import prices from "./prices";

type IData = {
  packages: Array<Package>,
  projects: Array<Project>,
  mainProjects: Array<Project>,
  prices: {
    balconyPrice: number,
    terracePrice: number,
    oneStoryHouseCoefficient: number,
    twoStoryHouseCoefficient: number
    complexRoofCoefficient: number,
    complexWallsCoefficient: number,
    oneFloorElementsCoefficient: number,
    price_per_meter: {
      50_80: Array<number>,
      80_120: Array<number>,
      120_180: Array<number>,
      180_220: Array<number>,
      220_300: Array<number>,
      300_450: Array<number>,
    }
  }
}

export const data: IData = {
  prices,
  packages,
  projects,
  mainProjects,
}
export default data;
