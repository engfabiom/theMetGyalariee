import SearchTypes from "./action-types";

export const theMetSetSearchResult = (payload) => ({
  type: SearchTypes.SET_SEARCH_RESULT,
  payload,
});
export const theMetCleanSearch = () => ({
  type: SearchTypes.CLEAN_SEARCH,
});
