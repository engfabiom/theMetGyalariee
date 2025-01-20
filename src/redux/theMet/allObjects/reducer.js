import AllObjectsTypes from "./action-types";
import { apiGetAllObjects } from "../../../api/requests";

const initialState = {
  allObjects: [],
};

const allObjectsReducer = /* async */ (state = initialState, action) => { 
  let objectList = [];
  switch (action.type) {
    case AllObjectsTypes.GET_ALL_OBJECTS:
      // objectList = await apiGetAllObjects();
      objectList = "Hello world!";
    case AllObjectsTypes.CLEAN_OBJECTS:
      return { ...state, allObjects: objectList };
    default:
      return state;
  }
};

export default allObjectsReducer;
