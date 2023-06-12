import { createSlice, nanoid } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducer: {
    addConact(state, action) {
      state.push(action.payload);
    },
    prepare(name, number) {
        return {
            payload: {
                id: nanoid(),
                name,
                number,
            },
        };
        deleteConact(state, action) {
                state.push(action.payload);
            }
        },
  },
});

export const { addContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
