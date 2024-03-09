import { thunkRequest } from "../store/tickets-slice";
import store from "../store/index";

// попробовать переписать на цикл while
const startRequest = async () => {
  const { stop, serverErrors, error } = store.getState().TicketsSlice;
  if (!stop && serverErrors.length < 10 && error === null) {
    const { searchId } = store.getState().TicketsSlice;
    await store.dispatch(thunkRequest(searchId));
    setTimeout(() => startRequest(), 0);
  }
};

export default startRequest;
