import SearchTypes from "./action-types";

/* ORDS says : it's disturbing that many files have the same name */
export const theMetSetSearchResult = (payload) => ({
  type: SearchTypes.SET_SEARCH_RESULT,
  payload,
});
export const theMetCleanSearch = () => ({
  type: SearchTypes.CLEAN_SEARCH,
});
