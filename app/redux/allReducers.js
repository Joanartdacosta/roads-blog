const { combineReducers } = require("@reduxjs/toolkit");
import tripReducer from "./tripSlice";
import tourReducer from "./tourSlice";
import fairReducer from "./fairSlice";

const allReducers = combineReducers({
  trip: tripReducer,
  tour: tourReducer,
  fair: fairReducer,
});

export default allReducers;
