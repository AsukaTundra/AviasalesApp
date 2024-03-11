import { thunkAsyncSorting } from "../store/app-slice";
import store from "../store/index";

const sortingTickets = async (func, value) => {
  if (func) {
    store.dispatch(func(value));
  }
  store.dispatch(thunkAsyncSorting(store.getState));
};

export default sortingTickets;
