import { combineReducers } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import swapiReducer from "./swapiSlice";

export default combineReducers({
  todo: todoReducer,
  swapi: swapiReducer,
});