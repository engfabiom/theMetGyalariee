import SearchTypes from "./action-types";

const initialState = {
  status: null,
  error: null,
  data: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SearchTypes.SET_SEARCH_RESULT + "_PENDING":
    case SearchTypes.CLEAN_SEARCH + "_PENDING":
      return { ...state, status:"pending" };

    case SearchTypes.SET_SEARCH_RESULT + "_REJECTED":
    case SearchTypes.CLEAN_SEARCH + "_REJECTED":
      return { ...state, status: "rejected", error: action.payload };

    case SearchTypes.SET_SEARCH_RESULT + "_FULFILLED":
      return { ...state, status: "fulfilled", error: null, data: action.payload };

    case SearchTypes.CLEAN_SEARCH + "_FULFILLED":
      return { ...state, status: "fulfilled", error: null, data: [] };

    default:
      return state;
  }
};

export default searchReducer;
