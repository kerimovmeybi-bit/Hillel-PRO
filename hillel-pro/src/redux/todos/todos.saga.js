import { put, takeEvery, delay, select } from "redux-saga/effects";
import { TODOS_TYPES } from "./todos.types";
import { setTodos } from "./todos.actions";

const getTodos = (state) => state.todos;

function* fetchTodosWorker() {
  yield delay(300);
  const stored = JSON.parse(localStorage.getItem("todos")) || [];
  yield put(setTodos(stored));
}

function* addTodoWorker(action) {
  yield delay(200);
  const todos = yield select(getTodos);

  const newTodo = {
    id: Date.now(),
    text: action.payload,
    completed: false,
  };

  const updated = [...todos, newTodo];
  localStorage.setItem("todos", JSON.stringify(updated));
  yield put(setTodos(updated));
}

export function* todosSaga() {
  yield takeEvery(TODOS_TYPES.FETCH_TODOS_REQUEST, fetchTodosWorker);
  yield takeEvery(TODOS_TYPES.ADD_TODO_REQUEST, addTodoWorker);
}