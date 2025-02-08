import colorThemeTypes from "./action-types";

export const setColorTheme = (payload) => ({
  type: colorThemeTypes.SET_COLOR_THEME,
  payload,
});
