import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
  },
  reducers: {
    addcontact: (state, action) => {
      state.items.unshift(action.payload);
    },

    deleteContact: (state, action) => {
      state.items = state.items.filter(({ id }) => id !== action.payload);
    },
  },
});

export const {addcontact, deleteContact} = contactSlice.actions;
export const contactReduser = contactSlice.reducer;

