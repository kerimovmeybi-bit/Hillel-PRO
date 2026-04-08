import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {
    addTodoRequest: (state) => {
      state.loading = true;
    },
    addTodoSuccess: (state, action) => {
      state.list.push(action.payload);
      state.loading = false;
    },
    removeTodo: (state, action) => {
      state.list = state.list.filter((_, i) => i !== action.payload);
    },
  },
});

export const { addTodoRequest, addTodoSuccess, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;