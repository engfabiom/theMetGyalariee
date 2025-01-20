import { combineReducers } from "redux";
import theMetReducer from "./theMet/reducer";

const rootReducer = combineReducers({
  theMetReducer,
});

export default rootReducer;
