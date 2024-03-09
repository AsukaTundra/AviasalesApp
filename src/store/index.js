import { compose } from "redux";
import { applyMiddleware, configureStore } from "@reduxjs/toolkit";

import InterfaceSlice from "./interface-slice";
import TicketsSlice from "./tickets-slice";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const store = configureStore({ reducer: { InterfaceSlice, TicketsSlice } }, composeEnhancers(applyMiddleware()));
export default store;
