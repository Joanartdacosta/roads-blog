import allReducers from "@/redux/allReducers";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: allReducers,
});
