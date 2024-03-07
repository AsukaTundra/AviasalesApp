import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchId: null,
  tickets: [],
  serverErrors: [],
  error: null,
};

export const searchIdFetch = createAsyncThunk("searchIdFetch", async () => {
  const response = await fetch("https://aviasales-test-api.kata.academy/search");
  if (response.ok) {
    const result = await response.json();
    return result;
  }
  throw Error("server error");
});

export const ticketsFetch = createAsyncThunk("ticketsFetch", async (key, { rejectWithValue }) => {
  try {
    const response = await fetch(`https://aviasales-test-ap.kata.academy/tickets?searchId=${key}`);
    if (response.ok) {
      return await response.json();
    }
    return rejectWithValue("server error");
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const priorityReducer = createSlice({
  name: "tickets",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(searchIdFetch.fulfilled, (state, action) => {
      state.searchId = action.payload.searchId;
    });
    builder.addCase(searchIdFetch.rejected, (state, action) => {
      state.error = action.error.message;
    });
    builder.addCase(ticketsFetch.fulfilled, (state, action) => {
      if (!action.payload.stop) {
        state.tickets.push(...action.payload.tickets);
      }
    });
    builder.addCase(ticketsFetch.rejected, (state, action) => {
      if (action.payload === "server error") {
        state.serverErrors.push(action.payload);
      } else {
        state.error = action.payload;
      }
    });
  },
});

export default priorityReducer.reducer;
