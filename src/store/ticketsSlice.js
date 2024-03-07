import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchId: null,
  tickets: [],
};

export const searchIdFetch = createAsyncThunk("searchIdFetch", async () => {
  const data = await fetch("https://aviasales-test-api.kata.academy/search");
  const result = await data.json();
  return result;
});

export const ticketsFetch = createAsyncThunk("ticketsFetch", async (key) => {
  const data = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${key}`);
  const result = await data.json();
  return result;
});

const priorityReducer = createSlice({
  name: "tickets",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(searchIdFetch.fulfilled, (state, action) => {
      state.searchId = action.payload.searchId;
    });
    builder.addCase(ticketsFetch.fulfilled, (state, action) => {
      if (!action.payload.stop) {
        state.tickets.push(...action.payload.tickets);
      }
    });
  },
});

export default priorityReducer.reducer;
