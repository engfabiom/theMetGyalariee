import AllObjectsTypes from "./action-types";

const initialState = {
  pending: false,
  fulfilled: true,
  rejected: false,
  allObjects: [],
};

const allObjectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case AllObjectsTypes.SET_ALL_OBJECTS + "_PENDING":
      return { pending: true , fulfilled: false, rejected: false, allObjects: [] };
    case AllObjectsTypes.SET_ALL_OBJECTS + "_FULFILLED":
      return { pending: false, fulfilled: true, rejected: false, allObjects:action.payload };
    case AllObjectsTypes.SET_ALL_OBJECTS + "_REJECTED":
      return { pending: false, fulfilled: false, rejected: action.payload, allObjects: [] };
    case AllObjectsTypes.CLEAN_ALL_OBJECTS:
      return { pending: false, fulfilled: true, rejected: false, allObjects: [] };
    default:
      return state;
  }
  return state;
};

export default allObjectsReducer;
