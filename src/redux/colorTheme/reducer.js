import colorThemeTypes from "./action-types";

const themePreference = window.matchMedia("(prefers-color-scheme: dark)").matches? "dark" : "light";

const initialState = localStorage.getItem("colorTheme") ?? themePreference;

const colorThemeReducer = (state = initialState, action) => {
  switch (action.type) {
    case colorThemeTypes.SET_COLOR_THEME:
      const userConsent = localStorage.getItem("localStorageConsent");
      userConsent && localStorage.setItem("colorTheme", action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default colorThemeReducer;
