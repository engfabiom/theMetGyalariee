import AllObjectsTypes from "./action-types";

export const theMetSetAllObjects = (payload) => ({
  type: AllObjectsTypes.SET_ALL_OBJECTS,
  payload,
});
export const theMetCleanAllObjects = () => ({
  type: AllObjectsTypes.CLEAN_ALL_OBJECTS,
});


