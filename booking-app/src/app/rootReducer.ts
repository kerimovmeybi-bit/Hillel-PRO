import { combineReducers } from "@reduxjs/toolkit";
import destinationsReducer from "../features/destinations/destinationsSlice";
import hotelsReducer from "../features/hotels/hotelsSlice";

const rootReducer = combineReducers({
  destinations: destinationsReducer,
  hotels: hotelsReducer, 
});

export default rootReducer;