import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./css/global.css";
import App from "./App";

import { Provider } from "react-redux";
import store from "./redux/store.js";

import { apiSearch, apiGetDepartments } from "./api/requests";
import { theMetSetSearchResult, theMetSetDepartments } from "./redux/rootActions";

console.clear();

store.dispatch(theMetSetDepartments(apiGetDepartments()));
store.dispatch(theMetSetSearchResult(apiSearch({isHighlight:true, hasImages:true, isOnView: true, q:"hippos"})));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
