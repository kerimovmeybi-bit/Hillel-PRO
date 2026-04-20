import { all } from "redux-saga/effects";
import { destinationsSaga } from "../features/destinations/destinationsSaga";
import { hotelsSaga } from "../features/hotels/hotelsSaga";

export default function* rootSaga() {
  console.log("ROOT SAGA STARTED");

  yield all([
    destinationsSaga(), 
    hotelsSaga(),       
  ]);
}