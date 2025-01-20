import axios from 'axios';

const apiGetAllObjects = async () => {
  try {
    const axiosquery = `https://collectionapi.metmuseum.org/public/collection/v1/objects`;
    const response = await axios.get(axiosquery);
    return response.data.objectIDs; // [ objectIDs: number ]
  } catch (e) {
    console.error(`ERROR - Objects Request: ...`, e.message, e.code);
    return null;
  }
}

const apiGetDepartments = async () => {
  try {
    const axiosquery = `https://collectionapi.metmuseum.org/public/collection/v1/departments`;
    const response = await axios.get(axiosquery);
    return response.data.departments; // [ {departmentId: number, displayName: string}) ]
  } catch (e) {
    console.error(`ERROR - Departments Request: ...`, e.message, e.code);
    return null;
  } 
}

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
    return response.data.objectIDs; // [ objectIDs: number ]
  } catch (e) {
    // Executes catch if response status isn't 200.
    console.error(`ERROR - Query Request: ${q}...`, e.message, e.code);
    return null;
  }
};

const apiGetObject = async (id) => {
  try {
    const axiosquery = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`;
    const response = await axios.get(axiosquery);
    return response.data; // [ { theMetObject } ]
  } catch (e) {
    console.error(`ERROR - Query Request: ${id}...`, e.message, e.code);
    return null;
  }
};

export { apiGetAllObjects, apiGetDepartments, apiSearch, apiGetObject };
