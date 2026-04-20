
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "destinations",
  initialState: { list: [] },
  reducers: {
    setDestinations: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setDestinations } = slice.actions;
export default slice.reducer;