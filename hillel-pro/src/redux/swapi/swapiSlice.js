// src/redux/swapi/swapiSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPerson = createAsyncThunk(
  "swapi/fetchPerson",
  async (id) => {
    const res = await axios.get(`https://swapi.py4e.com/api/people/${id}`);
    return res.data;
  }
);

const swapiSlice = createSlice({
  name: "swapi",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPerson.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPerson.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPerson.rejected, (state) => {
        state.loading = false;
        state.error = "Error loading data";
      });
  },
});

export default swapiSlice.reducer;