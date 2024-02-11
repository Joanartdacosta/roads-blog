import { createSlice } from "@reduxjs/toolkit";

const tourSlice = createSlice({
  name: "selectedTour",
  initialState: {
    selectedTour: {},
  },
  reducers: {
    saveTour(state, { payload }) {
      state.selectedTour = payload;
    },
  },
});

export const { saveTour } = tourSlice.actions;
export default tourSlice.reducer;
