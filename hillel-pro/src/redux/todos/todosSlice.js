// src/redux/todos/todosSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.list.push({ id: Date.now(), text: action.payload });
    },
    removeTodo: (state, action) => {
      state.list = state.list.filter(t => t.id !== action.payload);
    },
    clearTodos: (state) => {
      state.list = [];
    },
  },
});

export const { addTodo, removeTodo, clearTodos } = todosSlice.actions;
export default todosSlice.reducer;