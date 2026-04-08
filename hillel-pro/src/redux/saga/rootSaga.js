import { all } from "redux-saga/effects";
import todoSaga from "./todoSaga";
import swapiSaga from "./swapiSaga";

export default function* rootSaga() {
  yield all([todoSaga(), swapiSaga()]);
}