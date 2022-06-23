import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import type { FilterKey, FilterValues, OrderByValue } from "data/projects/filters";

import {
  areaKey,
  bathroomsKey,
  bedroomsKey,
  defaultFilterValues,
  floorsKey,
  priceKey,
  roofKey, styleKey
} from "data/projects/filters";
import projects from "data/projects";
import getProjectPrice from "../../../utils/getProjectPrice";
import getProjectTags from "../../../utils/getProjectTags";

export interface ProjectsState {
  filters: FilterValues,
  tempProjects: Array<Project>,
  projects: Array<Project>,
  orderBy: OrderByValue,
  orderAsc: boolean,
}

const initialState: ProjectsState = {
  filters: defaultFilterValues,
  tempProjects: projects,
  projects,
  orderBy: null,
  orderAsc: false,
}

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setFilterValue: (state, action: PayloadAction<{ key: FilterKey, value: string | number }>) => {
      const { key, value } = action.payload;

      state.filters[key] = value;
    },
    orderByKey: (state, action: PayloadAction<OrderByValue>) => {
      const key = action.payload;

      if (state.orderBy !== key) {
        state.orderBy = key;
        state.orderAsc = true;
      } else {
        state.orderAsc = !state.orderAsc;

        if (!state.orderAsc) {
          state.orderBy = null;
        }
      }
    },
    intermediateSearch: (state) => {
      let res = projects;
      // 1. Filter
      res = res.filter((e) => {
        for (const [key, value] of Object.entries(state.filters)) {
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
      switch (state.orderBy) {
        case priceKey:
          res = res.sort((a, b) => {
            return (getProjectPrice(a, 1) - getProjectPrice(b, 1)) * (state.orderAsc ? 1 : -1);
          })
          break;
        case areaKey:
          res = res.sort((a, b) => {
            return (a.area.common - b.area.common) * (state.orderAsc ? 1 : -1);
          })
          break;
        default:
          break;
      }

      state.tempProjects = res.map((project) => ({
        ...project,
        tags: getProjectTags(project)
      }));
    },
    search: (state) => {
      state.projects = state.tempProjects;
    }
  },
})

export const {
  setFilterValue,
  orderByKey,
  search,
  intermediateSearch
} = projectsSlice.actions

export default projectsSlice.reducer
