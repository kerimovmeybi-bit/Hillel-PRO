
import { call, put, takeLatest } from "redux-saga/effects";
import { api } from "../../api/axios";
import { setDestinations } from "./destinationsSlice";

function* fetchDestinations(): any {
  const { data } = yield call(api.get, "/destination");
  console.log("DEST DATA:", data); 
  yield put(setDestinations(data));
}

export function* destinationsSaga() {
  yield takeLatest("DESTINATIONS_FETCH", fetchDestinations);
}