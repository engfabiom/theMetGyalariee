import { apiGetObject } from "../api/requests";
import { setImageOrientation } from "./setImageOrientation";

// must return unique objects only, does NOT include the current ones...

export const getUniqueRandom = async ( currentObjectsArray, universeIDArray, quantity = 1 ) => {
  if (universeIDArray.length > 0) {
    let initialIDs = new Set(currentObjectsArray.map((o) => o.objectID));
    let finalObjects = [];
    let limitObjects = Math.min(quantity, universeIDArray.length - currentObjectsArray.length);

    const limitAPIErrorResponses = Math.min(5,universeIDArray.length);
    const limitImageErrorResponses = Math.min(5,universeIDArray.length);

    let imageErrors = limitImageErrorResponses;
    while (finalObjects.length < limitObjects) {
      let obj = null;
      let apiErrors = limitAPIErrorResponses;
      while (!obj?.objectID || obj?.primaryImageSmall === "") {
        let randomId;
        while ( initialIDs.has(randomId) || finalObjects.some((o) => o?.objectID === randomId) || randomId === undefined )
          randomId = universeIDArray[Math.floor(Math.random() * universeIDArray.length)];
        obj = await apiGetObject(randomId);
        !obj?.objectID && apiErrors--;
        if (apiErrors === 0) break;
      }
      obj = obj?.objectID ? await setImageOrientation(obj) : null;
      !obj && imageErrors--;
      if (imageErrors === 0) break;
      obj && finalObjects.push(obj);
    }
    return finalObjects;
  }
  return [];
};

export default getUniqueRandom;
