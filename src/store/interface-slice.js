import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: {
    all: false,
    not: false,
    one: false,
    two: false,
    three: false,
  },
  sort: "",
};

const filterAllCheck = (state, item) => {
  const newStateFilter = { ...state, [item]: !state[item] };
  const { not, one, two, three } = newStateFilter;
  newStateFilter.all = not && one && two && three ? (newStateFilter.all = true) : (newStateFilter.all = false);
  return newStateFilter;
};

const InterfaceSlice = createSlice({
  name: "interfaceInteractive",
  initialState,
  reducers: {
    handleSort(state, action) {
      return { ...state, sort: action.payload };
    },
    handleFilter(state, action) {
      if (action.payload === "all") {
        return {
          ...state,
          filter: {
            all: !state.filter.all,
            not: !state.filter.all,
            one: !state.filter.all,
            two: !state.filter.all,
            three: !state.filter.all,
          },
        };
      }
      return { ...state, filter: filterAllCheck(state.filter, action.payload) };
    },
  },
});

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

export const { handleSort, handleFilter } = InterfaceSlice.actions;
export default InterfaceSlice.reducer;
