import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  viewTickets: 5,
  serverErrors: [],
  error: null,
  searchId: null,
  stop: false,
  tickets: [],
};

const fetchRequest = async (id) => {
  const response = id
    ? await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`)
    : await fetch("https://aviasales-test-api.kata.academy/search");
  if (response.ok) {
    const result = await response.json();
    return result;
  }
  return "server error";
};

export const thunkRequest = createAsyncThunk("thunkRequest", async (searchId, { rejectWithValue }) => {
  try {
    const result = await fetchRequest(searchId);
    if (result === "server error") {
      return rejectWithValue(result);
    }
    return result;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const TicketsSlice = createSlice({
  name: "ticketsRequest",
  initialState,
  reducers: {
    handleViewTickets(state) {
      const newViewTickets = state.viewTickets + 5;
      return { ...state, viewTickets: newViewTickets };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(thunkRequest.fulfilled, (state, action) => {
      if (action.payload.searchId) {
        state.searchId = action.payload.searchId;
      } else if (!action.payload.stop) {
        state.tickets.push(...action.payload.tickets);
      } else if (action.payload.stop) {
        state.stop = action.payload.stop;
      }
    });
    builder.addCase(thunkRequest.rejected, (state, action) => {
      if (action.payload === "server error") {
        state.serverErrors.push(action.payload);
      } else {
        state.error = action.payload;
      }
    });
  },
});

export const { handleViewTickets } = TicketsSlice.actions;
export default TicketsSlice.reducer;
