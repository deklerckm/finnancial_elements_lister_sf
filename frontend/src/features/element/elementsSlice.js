import { createSlice } from '@reduxjs/toolkit';

const ELEMENTS_INITIAL_STATE = { value: [], loading: false, count: '' };

const elementSlices = createSlice({
  name: 'elements',
  initialState: ELEMENTS_INITIAL_STATE,
  reducers: {
    loadElements: (state, action) =>
      action.payload.nodes
        ? { value: action.payload.nodes, loading: false, count: action.payload.count }
        : ELEMENTS_INITIAL_STATE,
    resetElements: () => ELEMENTS_INITIAL_STATE,
    onLoading: (state) => ({ ...state, loading: true }),
  },
});

export const { loadElements, resetElements, onLoading } = elementSlices.actions;

export default elementSlices.reducer;
