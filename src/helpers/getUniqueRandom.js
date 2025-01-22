import { apiGetObject } from "../api/requests";
import { setImageOrientation } from "./setImageOrientation";

export const getUniqueRandom = async (currentObjectsArray, universeIDArray, quantity = 1 ) => {
  if (universeIDArray.length > 0) {
    let initialIDs = new Set(currentObjectsArray.map(o=>o.objectID));
    let finalObjects = [];
    let limit = Math.min(quantity, (universeIDArray.length - currentObjectsArray.length));
    while (finalObjects.length < limit) {
      let obj = null;
      while (!obj?.objectID || obj?.primaryImageSmall === "") {
        let randomId;
        while (initialIDs.has(randomId) || finalObjects.some(o=>o?.objectID === randomId) || randomId === undefined )
          randomId= Math.floor(Math.random() * universeIDArray.length);
        obj = await apiGetObject(randomId);
      }
      obj = await setImageOrientation(obj);
      obj && finalObjects.push(obj);
    }
    return finalObjects;
  }
  return [];
};

export default getUniqueRandom;