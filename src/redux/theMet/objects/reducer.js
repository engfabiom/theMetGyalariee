import ObjectsTypes from "./action-types";

const initialState = [];

const objectsReducer = (state = initialState, action) => {
  let objectsParam = action.payload;
  switch (action.type) {
    case ObjectsTypes.ADD_OBJECTS + "_PENDING":
      return state;
    case ObjectsTypes.ADD_OBJECTS + "_FULFILLED":
      return [...state, ...objectsParam];
    case ObjectsTypes.DROP_OBJECT:
      return [...state].filter((o) => o.ObjectID !== this, objectsParam);
    case ObjectsTypes.ADD_OBJECTS + "_REJECTED":
      return state;
    case ObjectsTypes.CLEAN_OBJECTS:
        return [];

    default:
      return state;
  }
};

export default objectsReducer;
