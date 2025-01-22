import SearchTypes from "./action-types";

const initialState = {
  pending: false,
  fulfilled: false,
  rejected: false,
  searchResult: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {

    case SearchTypes.SET_SEARCH_RESULT + "_PENDING":
      return { pending: true, fulfilled: false, rejected: false, searchResult: [] };

    case SearchTypes.SET_SEARCH_RESULT + "_FULFILLED":
      return { pending: false, fulfilled: true, rejected: false, searchResult: action.payload };

    case SearchTypes.SET_SEARCH_RESULT + "_REJECTED":
      return { pending: false, fulfilled: false, rejected: action.payload, searchResult: [] };

    case SearchTypes.CLEAN_SEARCH:
      return { pending: false, fulfilled: false, rejected: false, searchResult: [] };

    default:
      return state;
  }
};

export default searchReducer;
