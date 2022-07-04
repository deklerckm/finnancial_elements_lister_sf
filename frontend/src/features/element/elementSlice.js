import { createSlice } from '@reduxjs/toolkit';

const ELEMENT_INITIAL_STATE = {
  value: { id: 'tempId', summary: '', category: '', sum: '', currency: '', paid: '' },
  loading: false,
};

const elementSlice = createSlice({
  name: 'element',
  initialState: ELEMENT_INITIAL_STATE,
  reducers: {
    resetElements: () => ELEMENT_INITIAL_STATE,
    onLoading: (state) => ({ ...state, loading: true }),
    onPropertyChanged: (state, action) => {
      return { ...state, value: { ...state.value, ...action.payload } };
    },
  },
});

export const { resetElements, onLoading, onPropertyChanged } = elementSlice.actions;

export default elementSlice.reducer;
