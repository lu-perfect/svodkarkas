import type { PropsWithChildren } from "react";
import {useCallback,  useState} from "react";

import {
  areaKey,
  bathroomsKey,
  bedroomsKey,
  defaultFilterValues,
  floorsKey,
  OrderByValue,
  priceKey, roofKey, styleKey
} from 'data/projects/filters';
import type { FilterKey, FilterValues } from 'data/projects/filters';

import projects from "data/projects";

import ProjectSearchContext from "./context";
import getProjectTags from "../../utils/getProjectTags";
import getProjectPrice from "../../utils/getProjectPrice";

export default function ProjectSearchProvider({ children } : PropsWithChildren<{}>) {
  const [filteredProjects, setFilteredProjects] = useState<Array<Project>>(projects);
  const [filters, setFilters] = useState<FilterValues>(defaultFilterValues);

  const [orderBy, setOrderBy] = useState<OrderByValue>(null);
  const [orderAsc, setOrderAsc] = useState<boolean>(true);

  const getProjects = useCallback(() => {
    let res = projects;
    // 1. Filter
    res = res.filter((e) => {
      for (const [key, value] of Object.entries(filters)) {
        if (value === 'all') {
          continue;
        }

        switch (key) {
          case priceKey:
            const price = getProjectPrice(e, 1) / 1000000;

            if (value === '7+') {
              if (price < 7) {
                return false;
              }
            } else {
              const range = value.toString().split('_');

              const a = Number(range[0]);
              const b = Number(range[1]);

              if (price < a || price > b) {
                return false;
              }
            }
            break;
          case areaKey:
            const area = e.area.common;

            if (value === 'less_100') {
              if (area >= 100) {
                return false;
              }
            } else if (value === 'more_300') {
              if (area <= 300) {
                return false;
              }
            } else {
              const range = value.toString().split('_');

              const a = Number(range[0]);
              const b = Number(range[1]);

              if (area < a || area > b) {
                return false;
              }
            }
          break;
          case floorsKey:
            if (e.floors !== value) {
              return false;
            }
            break;
          case bedroomsKey:
            if (e.bedrooms !== value) {
              return false;
            }
            break;
          case bathroomsKey:
            if (e.bathrooms !== value) {
              return false;
            }
            break;
          case roofKey:
            if (e.roof.variant !== value) {
              return false;
            }
            break;
          case styleKey:
            if (e.style !== value) {
              return false;
            }
            break;
        }
      }
      return true;
    });

    // 2. Order
    switch (orderBy) {
      case priceKey:
        res = res.sort((a, b) => {
          return (getProjectPrice(a, 1) - getProjectPrice(b, 1)) * (orderAsc ? 1 : -1);
        })
        break;
      case areaKey:
        res = res.sort((a, b) => {
          return (a.area.common - b.area.common) * (orderAsc ? 1 : -1);
        })
        break;
      default:
        break;
    }

    return res.map((project) => ({
      ...project,
      tags: getProjectTags(project)
    }));
  }, [orderBy, filters, orderAsc]);

  function setFilterValue(key: FilterKey, value: string | number): void {
    setFilters({
      ...filters,
      [key]: value
    })
  }

  function search(): void {
    setFilteredProjects(getProjects());
  }

  function orderByKey(key: OrderByValue): void {
    if (orderBy !== key) {
      setOrderBy(key);
      setOrderAsc(true);
    } else {
      setOrderAsc(!orderAsc);
      if (!orderAsc) {
        setOrderBy(null);
      }
    }
  }

  return (
    <ProjectSearchContext.Provider
      value={{
        setFilterValue,
        filters,
        filteredProjects,
        orderByKey,
        orderBy,
        orderAsc,
        search,
      }}
    >
      {children}
    </ProjectSearchContext.Provider>
  );
}
