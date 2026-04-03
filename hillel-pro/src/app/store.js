import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { todosReducer } from "../redux/todos/todos.reducer";
import { rootSaga } from "../redux/rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  todosReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);