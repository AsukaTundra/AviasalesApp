import { configureStore } from "@reduxjs/toolkit";

import priorityPanel from "./priorityReducer";
import transfersPanel from "./transfersReducer";

const store = configureStore({ reducer: { priorityPanel, transfersPanel } });

export default store;
