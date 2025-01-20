import { apiGetObject, apiSearch } from "../api/requests";

export const getArrayObj = async (length = 1, params, callback) => {
  const objectIds = await apiSearch(params);
  const slicedIds = objectIds.slice(0, length);
  const objects = await Promise.all(
    slicedIds.map(async (id) => {
      return await apiGetObject(id);
    })
  );
  callback(objects);
};
