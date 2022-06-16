import { createContext } from "react";

import type { FilterKey, FilterValues } from "data/projects/filters";
import { defaultFilterValues, OrderByValue } from "data/projects/filters";

import projects from "data/projects";

const ProjectSearchContext = createContext<{
  setFilterValue: (key: FilterKey, value: string | number) => void,
  filters: FilterValues,
  filteredProjects: Array<Project>,
  orderByKey: (key: OrderByValue) => void,
  orderBy: OrderByValue,
  orderAsc: boolean,
  search: () => void,
}>({
  setFilterValue: () => {},
  filters: defaultFilterValues,
  filteredProjects: projects,
  orderBy: null,
  orderAsc: false,
  orderByKey: () => {},
  search: () => {},
});

export default ProjectSearchContext;
