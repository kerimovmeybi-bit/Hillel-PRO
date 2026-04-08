import { createSlice } from "@reduxjs/toolkit";

const swapiSlice = createSlice({
  name: "swapi",
  initialState: {
    people: [],
    loading: false,
  },
  reducers: {
    fetchPeopleRequest: (state) => {
      state.loading = true;
    },
    fetchPeopleSuccess: (state, action) => {
      state.people = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchPeopleRequest, fetchPeopleSuccess } = swapiSlice.actions;
export default swapiSlice.reducer;