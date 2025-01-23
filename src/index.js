import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./css/global.css";
import App from "./App";

import { Provider } from "react-redux";
import store from "./redux/store.js";

console.clear();

import { apiSearch , apiGetDepartments} from "./api/requests";
import { theMetSetSearchResult, theMetSetDepartments } from "./redux/rootActions";

store.dispatch(theMetSetSearchResult(apiSearch));  
store.dispatch(theMetSetDepartments(apiGetDepartments));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
