// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todos/todosSlice";
import swapiReducer from "./swapi/swapiSlice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    swapi: swapiReducer,
  },
});