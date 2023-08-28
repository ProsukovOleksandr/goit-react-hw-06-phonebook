import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './constants';

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;

export const selectFilter = state => state.filter.filter;

export const filterReducer = filterSlice.reducer;