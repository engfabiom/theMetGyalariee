import { combineReducers } from "redux";
import colorThemeReducer from "./colorTheme/reducer";
import localStorageConsentReducer from "./localStorageConsent/reducer";
import theMetReducer from "./theMet/reducer";

const rootReducer = combineReducers({
  colorThemeReducer,
  localStorageConsentReducer,
  theMetReducer,
});

export default rootReducer;
