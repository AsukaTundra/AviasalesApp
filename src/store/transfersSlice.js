import { createSlice } from "@reduxjs/toolkit";

export const TransfersCheckbox = {
  ALL: "all",
  NOT: "not",
  ONE: "one",
  TWO: "two",
  THREE: "three",
};

const initialState = {
  all: false,
  not: false,
  one: false,
  two: false,
  three: false,
};

const checkStateAll = (state, action) => {
  const newState = { ...state, [action]: !state[action] };
  const { not, one, two, three } = newState;
  if (not && one && two && three) {
    newState.all = true;
  } else {
    newState.all = false;
  }
  return newState;
};

const transfersReducer = createSlice({
  name: "transfers",
  initialState,
  reducers: {
    ChangeTransfers(state, action) {
      if (action.payload === "all") {
        return {
          all: !state.all,
          not: !state.all,
          one: !state.all,
          two: !state.all,
          three: !state.all,
        };
      }
      return checkStateAll(state, action.payload);
    },
  },
});

export const { ChangeTransfers } = transfersReducer.actions;

export default transfersReducer.reducer;
