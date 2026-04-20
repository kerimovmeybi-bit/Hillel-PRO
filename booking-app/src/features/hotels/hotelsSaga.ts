import { call, put, takeLatest } from "redux-saga/effects";
import { api } from "../../api/axios";
import { setHotels, fetchHotels } from "./hotelsSlice";

function* fetchHotelsWorker(action: any): any {
  console.log(" SAGA STARTED");

  const { destination } = action.payload;

  const { data } = yield call(api.get, "/hotels");

  console.log("ALL HOTELS:", data);

  const filtered = data.filter(
    (hotel: any) =>
      hotel.city?.toLowerCase() === destination.label.toLowerCase()
  );

  console.log("FILTERED:", filtered);

  //  fallback если пусто
  const result = filtered.length > 0 ? filtered : data.slice(0, 6);

  console.log("RESULT:", result);

  yield put(setHotels(result));
}

export function* hotelsSaga() {
  console.log("👀 HOTELS WATCHER STARTED");

  yield takeLatest(fetchHotels.type, fetchHotelsWorker);
}