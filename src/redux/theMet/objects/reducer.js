import ObjectsTypes from "./action-types";

const initialState = {
  pending: false,
  fulfilled: false,
  rejected: false,
  objects: [],
};

const objectsReducer = (state = initialState, action) => {
  let objectsPayload = action.payload;
  switch (action.type) {
    case ObjectsTypes.ADD_OBJECTS + "_PENDING":
      return {...state, pending: true};
    case ObjectsTypes.ADD_OBJECTS + "_FULFILLED":
      return {...state, pending: false, fulfilled: true, objects: [...state.objects,...objectsPayload]};
    case ObjectsTypes.DROP_OBJECT:
      return {...state, objects: [...state.objects].filter((o) => o.ObjectID !== this, objectsPayload)};
    case ObjectsTypes.ADD_OBJECTS + "_REJECTED":
      return {...state, rejected: true};
    case ObjectsTypes.CLEAN_OBJECTS:
        return {...state, fulfilled: true, objects:[]};

    default:
      return state;
  }
};

export default objectsReducer;
