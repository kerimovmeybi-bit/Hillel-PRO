import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "hotels",
  initialState: { list: [] },
  reducers: {
    setHotels: (state, action) => {
      state.list = action.payload;
    },
    fetchHotels: (_state, _action) => {}, // для SAGA
  },
});

export const { setHotels, fetchHotels } = slice.actions;
export default slice.reducer;