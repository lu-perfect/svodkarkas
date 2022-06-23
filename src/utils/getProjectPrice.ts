import { FloorsVariant, Price } from "utils/price.builder";

export function getProjectPrice(project: Project, _package: 1 | 2 | 3): number {
  return Price
    .builder()
    .setPackage(_package)
    .setArea(project.area.common)
    .setBalconyArea(project.area.balcony)
    .setTerraceArea(project.area.terrace)
    .setOneFloorElementsArea(project.oneFloorElement?.area ?? 0)
    .setComplexWallsArea(project.complexWallsElement?.area ?? 0)
    .setFloors(project.storeys || (project.floors as FloorsVariant))
    .hasComplexRoof(project.roof.isComplex ?? false)
    .build()
}
export default getProjectPrice;
