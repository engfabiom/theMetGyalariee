import axios from 'axios';

const apiSearch = async ({
  q = '*',
  isHighlight = false,
  isOnView = false,
  ...params
}) => {
  try {
    const axiosquery = `https://collectionapi.metmuseum.org/public/collection/v1/search`;
    const response = await axios.get(axiosquery, {
      params: {
        ...params,
        hasImages: true,
        isHighlight,
        isOnView,
        q,
      },
    });
    return response.data.objectIDs;
  } catch (e) {
    // Executes catch if response status isn't 200.
    console.error(`ERROR - Query Request: ${q}...`, e.message, e.code);
    return null;
  }
};

const apiGetOne = async (id) => {
  try {
    const axiosquery = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`;
    const response = await axios.get(axiosquery);
    return response.data;
  } catch (e) {
    console.error(`ERROR - Query Request: ${id}...`, e.message, e.code);
    return null;
  }
};

export { apiSearch, apiGetOne };
