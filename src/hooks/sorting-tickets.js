import { thunkAsyncSorting } from "../store/app-slice";
import store from "../store/index";

/* хук вызова пересортировки при изменении фильтров */

const sortingTickets = async (func, value) => {
  if (func) {
    store.dispatch(func(value));
  }
  store.dispatch(thunkAsyncSorting(store.getState));
};

export default sortingTickets;
