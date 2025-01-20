import { apiGetObject } from "../api/requests";
import museum from "../data/museumIds.json";
export const getOneRandom = async () => {
  //491,708 is the harded-coded total objects in the api. Randoms between 0 and 491,707.
  const randomId = Math.floor(Math.random() * museum.objectIDs.length);
  const object = await apiGetObject(museum.objectIDs[randomId]);
  // Recursion
  if (!object || object?.primaryImageSmall === "") {
    return await getOneRandom();
  }
  return object;
};