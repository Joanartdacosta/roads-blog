import { createSlice } from "@reduxjs/toolkit";

export const tripSlice = createSlice({
  name: "selectedTrip",
  initialState: {
    selectedTrip: {},
  },
  reducers: {
    saveTrip(state, { payload }) {
      state.selectedTrip = payload;
    },
  },
});

export const { saveTrip } = tripSlice.actions;
export default tripSlice.reducer;
