import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const FilterValues = {
  ALL: "all",
  NOT: "not",
  ONE: "one",
  TWO: "two",
  THREE: "three",
};
export const SortValues = {
  CHEAP: "cheap",
  FAST: "fast",
  OPTIMAL: "optimal",
};

const filterAllOnOff = (state, item) => {
  const newStateFilter = { ...state, [item]: !state[item] };
  const { not, one, two, three } = newStateFilter;
  newStateFilter.all = not && one && two && three ? (newStateFilter.all = true) : (newStateFilter.all = false);
  return newStateFilter;
};

const doFilteredTickets = (tickets, filter) => {
  return tickets.filter((ticket) => {
    if (filter.all) {
      return true;
    }
    if (filter.not && ticket.segments.every((segment) => segment.stops.length === 0)) {
      return true;
    }
    if (filter.one && ticket.segments.every((segment) => segment.stops.length === 1)) {
      return true;
    }
    if (filter.two && ticket.segments.every((segment) => segment.stops.length === 2)) {
      return true;
    }
    if (filter.three && ticket.segments.every((segment) => segment.stops.length === 3)) {
      return true;
    }
    return false;
  });
};

const doSortingTickets = (tickets, sort) => {
  if (sort === SortValues.CHEAP) {
    return tickets.sort(function cheap(a, b) {
      if (a.price > b.price) {
        return 1;
      }
      if (a.price < b.price) {
        return -1;
      }
      return 0;
    });
  }
  if (sort === SortValues.FAST) {
    return tickets.sort(function fast(a, b) {
      if (a.segments[0].duration + a.segments[1].duration > b.segments[0].duration + b.segments[1].duration) {
        return 1;
      }
      if (a.segments[0].duration + a.segments[1].duration < b.segments[0].duration + b.segments[1].duration) {
        return -1;
      }
      return 0;
    });
  }
  if (sort === SortValues.OPTIMAL) {
    return tickets.sort(function optimal(a, b) {
      if (
        a.segments[0].duration + a.segments[1].duration + a.price >
        b.segments[0].duration + b.segments[1].duration + b.price
      ) {
        return 1;
      }
      if (
        a.segments[0].duration + a.segments[1].duration + a.price <
        b.segments[0].duration + b.segments[1].duration + b.price
      ) {
        return -1;
      }
      return 0;
    });
  }
  return tickets;
};

export const thunkSorting = createAsyncThunk("thunkSorting", async (getState) => {
  let sortingTickets = getState().AppSlice.tickets.tickets;
  sortingTickets = doFilteredTickets(sortingTickets, getState().AppSlice.buttons.filter);
  sortingTickets = doSortingTickets(sortingTickets, getState().AppSlice.buttons.sort);
  return sortingTickets.slice(0, getState().AppSlice.tickets.viewTickets);
});

export const thunkRequest = createAsyncThunk("thunkRequest", async (getState, { rejectWithValue }) => {
  const { searchId } = getState().AppSlice.tickets;
  try {
    const response = searchId
      ? await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
      : await fetch("https://aviasales-test-api.kata.academy/search");
    if (response.ok) {
      return await response.json();
    }
    return rejectWithValue("server error");
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const initialState = {
  buttons: {
    filter: {
      all: true,
      not: false,
      one: false,
      two: false,
      three: false,
    },
    sort: "",
  },
  tickets: {
    stop: false,
    loading: true,
    serverErrors: [],
    error: null,
    searchId: null,
    viewTickets: 5,
    sortingTickets: [],
    tickets: [],
  },
};

const AppSlice = createSlice({
  name: "aviasales",
  initialState,
  reducers: {
    handleSort(state, action) {
      state.buttons.sort = action.payload;
    },
    handleFilter(state, action) {
      if (action.payload === "all") {
        state.buttons.filter = {
          all: !state.buttons.filter.all,
          not: !state.buttons.filter.all,
          one: !state.buttons.filter.all,
          two: !state.buttons.filter.all,
          three: !state.buttons.filter.all,
        };
      }
      state.buttons.filter = filterAllOnOff(state.buttons.filter, action.payload);
    },
    handleViewTickets(state) {
      state.tickets.viewTickets += 5;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(thunkRequest.fulfilled, (state, action) => {
      if (action.payload.searchId) {
        state.tickets.searchId = action.payload.searchId;
      } else if (!action.payload.stop) {
        state.tickets.tickets.push(...action.payload.tickets);
        state.tickets.loading = false;
      } else if (action.payload.stop) {
        state.tickets.stop = action.payload.stop;
      }
    });
    builder.addCase(thunkRequest.rejected, (state, action) => {
      if (action.payload === "server error") {
        state.tickets.serverErrors.push(action.payload);
      } else {
        state.tickets.error = action.payload;
      }
    });
    builder.addCase(thunkSorting.fulfilled, (state, action) => {
      state.tickets.sortingTickets = action.payload;
    });
    builder.addCase(thunkSorting.rejected, (state, action) => {
      state.tickets.error = action.error;
    });
  },
});

export const { handleSort, handleFilter, handleViewTickets } = AppSlice.actions;
export default AppSlice.reducer;
