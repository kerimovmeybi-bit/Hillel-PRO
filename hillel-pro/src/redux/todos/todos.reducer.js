import { TODOS_TYPES } from "./todos.types";

const initialState = {
  todos: [],
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODOS_TYPES.SET_TODOS:
      return { ...state, todos: action.payload };

    case TODOS_TYPES.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((t) => t.id !== action.payload),
      };

    case TODOS_TYPES.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((t) =>
          t.id === action.payload
            ? { ...t, completed: !t.completed }
            : t
        ),
      };

    case TODOS_TYPES.EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((t) =>
          t.id === action.payload.id
            ? { ...t, text: action.payload.text }
            : t
        ),
      };

    case TODOS_TYPES.CLEAR_TODOS:
      return { ...state, todos: [] };

    default:
      return state;
  }
};