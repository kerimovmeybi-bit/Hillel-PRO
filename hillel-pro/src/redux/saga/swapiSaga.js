import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { fetchPeopleRequest, fetchPeopleSuccess } from "../slices/swapiSlice";

function fetchApi() {
  return axios.get("https://swapi.dev/api/people");
}

function* worker() {
  const res = yield call(fetchApi);
  yield put(fetchPeopleSuccess(res.data.results));
}

export default function* swapiSaga() {
  yield takeEvery(fetchPeopleRequest.type, worker);
}