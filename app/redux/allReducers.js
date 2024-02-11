const { combineReducers } = require("@reduxjs/toolkit");
import tripReducer from "./tripSlice";
import tourReducer from "./tourSlice";

const allReducers = combineReducers({
  trip: tripReducer,
  tour: tourReducer,
});

export default allReducers;
