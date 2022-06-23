import type { ThunkAction, Action } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import { projectsSlice } from "app/projects/store/slice";
import {modalsSlice} from "../app/modals/store/slice";
import {searchSlice} from "../app/search/store/slice";

export function makeStore() {
  return configureStore({
    reducer: {
      [searchSlice.name]: searchSlice.reducer,
      [modalsSlice.name]: modalsSlice.reducer,
      [projectsSlice.name]: projectsSlice.reducer
    },
  })
}

const store = makeStore();

declare global {
  type AppState = ReturnType<typeof store.getState>

  type AppDispatch = typeof store.dispatch

  type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action<string>
  >
}

export default store;
