import { configureStore } from "@reduxjs/toolkit";

import priorityPanel from "./prioritySlice";
import transfersPanel from "./transfersSlice";
import ticketsSlice from "./ticketsSlice";

const store = configureStore({ reducer: { priorityPanel, transfersPanel, ticketsSlice } });

export default store;
