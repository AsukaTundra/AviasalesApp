// import { compose } from "redux";
// import { applyMiddleware } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

import AppSlice from "./app-slice";

// const composeEnhancers =
//   typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//     : compose;

const store = configureStore({ reducer: { AppSlice } });
export default store;
