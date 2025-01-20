import { combineReducers } from "redux";
import allObjectsReducer from "./allObjects/reducer";
import departmentsReducer from "./departments/reducer";
import objectsReducer from "./objects/reducer";
import searchResultReducer from "./searchResult/reducer";

const theMetReducer = combineReducers({
  allObjectsReducer,
  departmentsReducer,
  objectsReducer,
  searchResultReducer,
});

export default theMetReducer;
