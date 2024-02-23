const { combineReducers } = require("@reduxjs/toolkit");
import tripReducer from "@/redux/tripSlice";
import tourReducer from "@/redux/tourSlice";

const allReducers = combineReducers({
  trip: tripReducer,
  tour: tourReducer,
});

export default allReducers;
