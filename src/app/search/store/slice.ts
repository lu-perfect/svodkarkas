import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import projects from "../../../data/projects";
import services from "app/services/sections/Services/services.data";

type SearchMatch = {
  href: string;
  caption: string;
  description?: string;
}

export interface SearchState {
  term: string;
  matches: {
    count: number;
    categories: {
      projects: Array<SearchMatch>,
      services: Array<SearchMatch>,
    }
  };
}

const initialState: SearchState = {
  term: '',
  matches: {
    count: 0,
    categories: {
      projects: [],
      services: [],
    }
  }
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload;

      const projectsMatches = projects.filter((e) => e.title.toLowerCase().search(action.payload.toLowerCase()) !== -1).map((project) => ({
        caption: project.title,
        href: `/projects/${project.id}`
      }));

      const servicesMatches = services.filter((e) =>
        e.label.toLowerCase().search(action.payload.toLowerCase()) !== -1 ||
        e.description.toLowerCase().search(action.payload.toLowerCase()) !== -1
      ).map((service) => ({
        href: `/services#${service.filename}`,
        caption: service.label,
        description: service.description
      }))

      state.matches = {
        count: projectsMatches.length + servicesMatches.length,
        categories: {
          projects: projectsMatches,
          services: servicesMatches,
        }
      }
    },
  },
})

export const {
  setTerm
} = searchSlice.actions

export default searchSlice.reducer
