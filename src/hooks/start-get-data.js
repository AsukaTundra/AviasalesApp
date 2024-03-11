import { thunkRequest } from "../store/app-slice";
import store from "../store/index";

import sortingTickets from "./sorting-tickets";

const startRequest = async () => {
  const { stop, serverErrors, error } = store.getState().AppSlice.tickets;
  if (!stop && serverErrors.length < 10 && error === null) {
    await store.dispatch(thunkRequest(store.getState));
    setTimeout(() => startRequest(), 0);
    sortingTickets();
  }
};

export default startRequest;
