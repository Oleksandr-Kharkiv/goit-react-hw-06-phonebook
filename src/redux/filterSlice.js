import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducer: {
      setStatusFilter(state, action) {
        console.log(state);
        console.log(action);
        state.push(action.payload);
      },
      // deleteContact(state, action) {state.filter(contact => contact.id !== action.payload)}
    },
  }
);
export const { setStatusFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;