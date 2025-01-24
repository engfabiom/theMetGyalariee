import axios from 'axios';
import {URLSearchParams} from "url";
import { setImageOrientation } from '../helpers/setImageOrientation';

export const apiGetAllObjects = async () => {
  try {
    const axiosquery = `https://collectionapi.metmuseum.org/public/collection/v1/objects`;
    const response = await axios.get(axiosquery);
    return response.data.objectIDs; // [ objectIDs: number ]
  } catch (e) {
    console.error(`ERROR - Objects Request: ...`, e.message, e.code);
    return e;
  }
}

export const apiGetDepartments = async () => {
  try {
    const axiosquery = `https://collectionapi.metmuseum.org/public/collection/v1/departments`;
    const response = await axios.get(axiosquery);
    return response.data.departments; // [ {departmentId: number, displayName: string}) ]
  } catch (e) {
    console.error(`ERROR - Departments Request: ...`, e.message, e.code);
    return e;
  } 
}

export const apiSearch = async (paramsObject) => {
  let searchTerms = { ...paramsObject, q: "*" };
  delete searchTerms.q;
  searchTerms = { hasImages: true, ...searchTerms, q: paramsObject?.q || "*" };
  
    searchTerms = Object.entries(searchTerms).map(p=>("&"+p[0]+"="+p[1])).join("");
    searchTerms = searchTerms.replace(searchTerms.charAt(0),"?");

  console.log(searchTerms);

  try {
    const axiosquery = `https://collectionapi.metmuseum.org/public/collection/v1/search${searchTerms}`;
    const response = await axios.get(axiosquery);
    return response.data.objectIDs; // [ objectIDs: number ]
  } catch (e) {
    // Executes catch if response status isn't 200.
    console.error(`ERROR - Query Request: ${q}...`, e.message, e.code);
    return e;
  }
};

export const apiGetObject = async (id) => {
  try {
    const axiosquery = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`;
    const response = await axios.get(axiosquery);
    const obj = setImageOrientation(response.data);
    return obj; // [ { theMetObject } ]
  } catch (e) {
    console.error(`ERROR - Query Request: ${id}...`, e.message, e.code);
    return e;
  }
};

/* ORDS says : I dont understand why was it necessary to filter numbers ? */
export const apiGetObjects = async (objectIDsArray) => {
  try {
    let objects = await Promise.all(objectIDsArray.map(apiGetObject));
    objects = objects.filter(o=>Number.isFinite(o?.objectID))
    return objects;
  } catch (e) {
    console.error(`ERROR - Query Request: ${id}...`, e.message, e.code);
    return;
  }
};

