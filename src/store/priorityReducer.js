import { createSlice } from "@reduxjs/toolkit";

export const PriorityValue = {
  CHEAP: "cheap",
  FAST: "fast",
  OPTIMAL: "optimal",
};

const initialState = {
  sort: "",
};

const priorityReducer = createSlice({
  name: "priority",
  initialState,
  reducers: {
    ChangePriority(state, action) {
      state.sort = action.payload;
    },
  },
});

export const { ChangePriority } = priorityReducer.actions;

export default priorityReducer.reducer;
