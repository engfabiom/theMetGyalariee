import SearchTypes from "./action-types";

const theMetSearchObjects = (payload) => ({
  type: SearchTypes.SEARCH_OBJECTS,
  payload,
});

export { theMetSearchObjects }