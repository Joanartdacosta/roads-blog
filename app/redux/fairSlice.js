import { createSlice } from "@reduxjs/toolkit";

const fairSlice = createSlice({
  name: "allFairs",
  initialState: {
    allFairs: {},
  },
  reducers: {
    saveAllFairs(state, { payload }) {
      state.allFairs = payload;
    },
  },
});

export const { saveAllFairs } = fairSlice.actions;
export default fairSlice.reducer;
