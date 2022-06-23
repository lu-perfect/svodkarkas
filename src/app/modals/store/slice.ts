import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

type ModalVariant = 'feedback';

export interface ModalsState {
  variant: ModalVariant | 'hidden';
}

const initialState: ModalsState = {
  variant: 'hidden',
}

export const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<ModalVariant>) => {
      state.variant = action.payload;
    },
    closeModal: (state) => {
      state.variant = 'hidden';
    }
  }
})

export const {
  openModal, closeModal
} = modalsSlice.actions

export default modalsSlice.reducer
