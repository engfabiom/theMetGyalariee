import SearchTypes from "./action-types";
import { apiSearch } from "../../../api/requests";

const initialState = {
  searchResult: [],
};

const searchReducer = async (state = initialState, action) => {
  let search = [];
  switch (action.type) {
    case SearchTypes.SEARCH_OBJECTS:
      search = await apiSearch(action.payload);
      return { ...state, searchResult: [...search] };
    default:
      return state;
  }
};

export default searchReducer;
