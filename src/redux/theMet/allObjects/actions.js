import AllObjectsTypes from "./action-types";

const theMetGetAllObjects = () => ({
  type: AllObjectsTypes.GET_ALL_OBJECTS,
});
const theMetCleanAllObjects = () => ({
  type: AllObjectsTypes.CLEAN_OBJECTS,
});

export { theMetGetAllObjects, theMetCleanAllObjects };
