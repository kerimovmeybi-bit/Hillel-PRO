import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "hotels",
  initialState: { list: [] },
  reducers: {
    setHotels: (state, action) => {
      state.list = action.payload;
    },
    fetchHotels: (state, action) => {}, //  ДЛЯ SAGA
  },
});

export const { setHotels, fetchHotels } = slice.actions;
export default slice.reducer;