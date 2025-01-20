import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./css/index.css";
import App from "./App";

import { Provider } from "react-redux";
import store from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
