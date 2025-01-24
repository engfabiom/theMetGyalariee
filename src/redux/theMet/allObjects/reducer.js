import AllObjectsTypes from "./action-types";

const initialState = {
  status: null,
  error: null,
  data: [],
};

const allObjectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case AllObjectsTypes.SET_ALL_OBJECTS + "_PENDING":
    case AllObjectsTypes.CLEAN_ALL_OBJECTS + "_PENDING":
      return { ...state, status: "pending" };

    case AllObjectsTypes.SET_ALL_OBJECTS + "_REJECTED":
    case AllObjectsTypes.CLEAN_ALL_OBJECTS + "_REJECTED":
      return { ...state, status: "rejected", error: action.payload };

    case AllObjectsTypes.SET_ALL_OBJECTS + "_FULFILLED":
      return {...state, status: "fulfilled", error: null, data: action.payload };

    case AllObjectsTypes.CLEAN_ALL_OBJECTS + "_FULFILLED":
      return { ...state, status: "fulfilled", error: null, data: [] };

    default:
      return state;
  }
};

export default allObjectsReducer;
