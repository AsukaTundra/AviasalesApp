import { thunkAsyncRequest } from "../store/app-slice";
import store from "../store/index";

import sortingTickets from "./sorting-tickets";

/* хук запуска запросов на билеты */

const startRequest = async () => {
  const { stop, serverErrors, error } = store.getState().AppSlice.tickets;
  if (!stop && serverErrors.length < 10 && error === null) {
    await store.dispatch(thunkAsyncRequest(store.getState));
    setTimeout(() => startRequest(), 0);
    sortingTickets();
  }
};

export default startRequest;
