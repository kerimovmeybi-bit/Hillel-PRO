import { put, takeEvery, delay } from "redux-saga/effects";
import { addTodoRequest, addTodoSuccess } from "../slices/todoSlice";

function* addTodoWorker(action) {
  // имитация запроса к серверу
  yield delay(500);

  yield put(addTodoSuccess(action.payload));
}

export default function* todoSaga() {
  yield takeEvery(addTodoRequest.type, addTodoWorker);
}