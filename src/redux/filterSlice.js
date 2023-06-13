import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducer: {
      setFilter(state, action) {
        console.log(action);
          state.status = action.payload;
      },
    },
  }
);
export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;