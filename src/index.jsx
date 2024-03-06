import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./index.scss";
import store from "./store";
import Aviasales from "./components/app";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <Provider store={store}>
    <Aviasales />
  </Provider>
);
