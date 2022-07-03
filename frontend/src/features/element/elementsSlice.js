import { createSlice } from '@reduxjs/toolkit';

const ELEMENTS_INITIAL_STATE = { value: [], loading: false };

const elementSlice = createSlice({
  name: 'elements',
  initialState: ELEMENTS_INITIAL_STATE,
  reducers: {
    loadElements: (state, action) =>
      action.payload
        ? { value: action.payload, loading: false }
        : { value: [], loading: false },
    resetElements: () => ELEMENTS_INITIAL_STATE,
    onLoading: (state) => ({ ...state, loading: true }),
  },
});

export const { loadElements, resetElements, onLoading } = elementSlice.actions;

export default elementSlice.reducer;