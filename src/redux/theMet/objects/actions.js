import ObjectsTypes from "./action-types";

const theMetAddObject = (payload) => ({
  type: ObjectsTypes.ADD_OBJECT,
  payload,
});
const theMetDropObject = (payload) => ({
  type: ObjectsTypes.DROP_OBJECT,
  payload,
});

export { theMetAddObject, theMetDropObject };
