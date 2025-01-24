import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./css/global.css";
import App from "./App";

import { Provider } from "react-redux";
import store from "./redux/store.js";

import { apiSearch } from "./api/requests";
import { theMetSetSearchResult } from "./redux/rootActions";

console.clear();

store.dispatch(theMetSetSearchResult(apiSearch({ hasImage: true })));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
