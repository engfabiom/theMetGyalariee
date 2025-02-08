import ConsentTypes from "./action-types";

const initialState = (localStorage.getItem("localStorageConsent") ?? false) == "true";

const localStorageConsentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ConsentTypes.SET_CONSENT:
      localStorage.setItem("localStorageConsent", true);
      return true;
    case ConsentTypes.RESET_CONSENT:
      localStorage.removeItem("localStorageConsent");
      localStorage.removeItem("colorTheme");
      return false;
    default:
      return state;
  }
};

export default localStorageConsentReducer;
