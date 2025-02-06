import ObjectsTypes from "./action-types";

const initialState = {
  status: null,
  error: null,
  data: [],
};

const objectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ObjectsTypes.ADD_OBJECTS + "_PENDING":
    case ObjectsTypes.DROP_OBJECT + "_PENDING":
      return { ...state, status: "pending" };

    case ObjectsTypes.ADD_OBJECTS + "_REJECTED":
      return { ...state, status: "rejected", error: action.payload };

    case ObjectsTypes.CLEAN_OBJECTS:
      return {status: "fulfilled", error: null, data: [] };

    case ObjectsTypes.ADD_OBJECTS + "_FULFILLED":
      return {status: "fulfilled", error: null, data: [...state.data,...action.payload] };

    case ObjectsTypes.DROP_OBJECT + "_FULFILLED":
      return {
        ...state, 
        status: "fulfilled", 
        data: [...state.data].filter(
          (o) => o.ObjectID !== action.payload),
      };

    default:
      return state;
  }
};

export default objectsReducer;
