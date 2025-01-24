import { apiGetObject } from "../api/requests";
import { setImageOrientation } from "./setImageOrientation";

export const getUniqueRandom = async (currentObjectsArray, universeIDArray, quantity = 1 ) => {
  if (universeIDArray.length > 0) {
    let initialIDs = new Set(currentObjectsArray.map(o=>o.objectID));
    let finalObjects = [];
    let limitObjects = Math.min(quantity, (universeIDArray.length - currentObjectsArray.length));

    const limitAPIErrorResponses = 10;
    const limitImageErrorResponses = 10;

    let imageErrors = limitImageErrorResponses;
    while (finalObjects.length < limitObjects) {
      let obj = null;
      let apiErrors = limitAPIErrorResponses;
      while (!obj?.objectID || obj?.primaryImageSmall === "") {
        let randomId;
        while (initialIDs.has(randomId) || finalObjects.some(o=>o?.objectID === randomId) || randomId === undefined )
          randomId= universeIDArray[Math.floor(Math.random() * universeIDArray.length)];
        obj = await apiGetObject(randomId);
        !obj && apiErrors--;
        if (apiErrors === 0) break;
      }
      obj = await setImageOrientation(obj);
      !obj && imageErrors--;
      if (imageErrors === 0) break;
      obj && finalObjects.push(obj);
    }
    return finalObjects;
  }
  return [];
};

export default getUniqueRandom;