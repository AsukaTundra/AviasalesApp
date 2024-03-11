import { thunkSorting } from "../store/app-slice";
import store from "../store/index";

const sortingTickets = async (func, value) => {
  if (func) {
    store.dispatch(func(value));
  }
  store.dispatch(thunkSorting(store.getState));
};

export default sortingTickets;
