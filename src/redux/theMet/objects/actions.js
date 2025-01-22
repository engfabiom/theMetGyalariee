import ObjectsTypes from "./action-types";

export const theMetAddObjects = (payload) => ({
  type: ObjectsTypes.ADD_OBJECTS,
  payload,
});

export const theMetDropObject = (payload) => ({
  type: ObjectsTypes.DROP_OBJECT,
  payload,
});

export const theMetCleanObjects = () => ({
  type: ObjectsTypes.CLEAN_OBJECTS,
});
