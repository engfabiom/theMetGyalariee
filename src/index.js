import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./css/global.css";
import App from "./App";

import { Provider } from "react-redux";
import store from "./redux/store.js";

console.clear();

import { apiSearch , apiGetDepartments} from "./api/requests";
import { theMetSetSearchResult, theMetSetDepartments } from "./redux/theMet/actions";

// const randomArray = async (n) => Array.from(new Set([...Array(n).keys()].map(e=>Math.floor(Math.random()*n*10)+1).sort((a,b)=>a-b)));

store.dispatch(theMetSetSearchResult(apiSearch)); //apiGetAllObjects 
store.dispatch(theMetSetDepartments(apiGetDepartments));//apiGetDepartments

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
