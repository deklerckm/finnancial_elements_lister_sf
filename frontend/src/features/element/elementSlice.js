import { createSlice } from '@reduxjs/toolkit';

const ELEMENT_INITIAL_STATE = {
  value: { id: 'tempId', summary: '', category: '', sum: '', currency: '', paid: '' },
  defaultValue: null,
  loading: false,
};

const elementSlice = createSlice({
  name: 'element',
  initialState: ELEMENT_INITIAL_STATE,
  reducers: {
    resetElement: () => ELEMENT_INITIAL_STATE,
    toggleLoading: (state, action) => ({
      ...state,
      loading: action.payload ?? !state.loading,
    }),
    onPropertyChanged: (state, action) => {
      return { ...state, value: { ...state.value, ...action.payload } };
    },
    loadElement: (state, action) =>
      action.payload
        ? { value: action.payload, defaultValue: action.payload, loading: false }
        : ELEMENT_INITIAL_STATE,
  },
});

export const { resetElement, toggleLoading, onPropertyChanged, loadElement } =
  elementSlice.actions;

export default elementSlice.reducer;
