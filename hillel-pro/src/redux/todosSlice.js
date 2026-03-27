import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: []
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: Date.now(),
        text: action.payload
      });
    }
  }
});

export const { addTodo } = todosSlice.actions;
export default todosSlice.reducer;