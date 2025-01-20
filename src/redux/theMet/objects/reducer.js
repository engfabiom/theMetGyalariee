import ObjectsTypes from "./action-types";
import {apiGetObject} from "../../../api/requests";

const initialState = {
  objects: [],
};

const objectsReducer = async (state = initialState, action) => {
  switch (action.type) {
    case ObjectsTypes.ADD_OBJECT:
      let object = await apiGetObject(action.payload.ObjectID);
      return { ...state, objects: [...state.objects, object] };

    case ObjectsTypes.DROP_OBJECT:
      newAllObjects = (new Set(state.theMetAllObjects)).delete(action.payload.ObjectID);
      newSearchResult = (new Set(state.theMetSearchResult)).delete(action.payload.ObjectID);
      newObjects = [...state.theMetObjects].filter((o) => o.ObjectID !== action.payload.ObjectID);
      return {
        ...state,
        theMetAllObjects: [newAllObjects],
        theMetSearchResult: new Set(newSearchResult),
        theMetObjects: [...newObjects],
      };

    default:
      return state;
  }
};

export default objectsReducer;