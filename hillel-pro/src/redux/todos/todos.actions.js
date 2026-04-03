import { TODOS_TYPES } from "./todos.types";

export const fetchTodos = () => ({
  type: TODOS_TYPES.FETCH_TODOS_REQUEST,
});

export const setTodos = (todos) => ({
  type: TODOS_TYPES.SET_TODOS,
  payload: todos,
});

export const addTodo = (text) => ({
  type: TODOS_TYPES.ADD_TODO_REQUEST,
  payload: text,
});

export const deleteTodo = (id) => ({
  type: TODOS_TYPES.DELETE_TODO,
  payload: id,
});

export const toggleTodo = (id) => ({
  type: TODOS_TYPES.TOGGLE_TODO,
  payload: id,
});

export const editTodo = (id, text) => ({
  type: TODOS_TYPES.EDIT_TODO,
  payload: { id, text },
});

export const clearTodos = () => ({
  type: TODOS_TYPES.CLEAR_TODOS,
});