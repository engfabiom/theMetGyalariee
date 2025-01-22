import DepartmentsTypes from "./action-types";

const initialState = {
  pending: false,
  fulfilled: false,
  rejected: false,
  departments: [],
  error: null,
};

const departmentsReducer = (state = initialState, action) => {
  let newState = {
    pending: action.type.includes("_PENDING"),
    fulfilled: action.type.includes("_FULFILLED"),
    rejected: action.type.includes("_REJECTED"),
  }
  switch (action.type) {
    case DepartmentsTypes.SET_DEPARTMENTS + "_PENDING":
      return { ...newState, departments: [] };
    case DepartmentsTypes.SET_DEPARTMENTS + "_FULFILLED":
      return { ...newState, departments: action.payload };
    case DepartmentsTypes.SET_DEPARTMENTS + "_REJECTED":
      return { ...newState, error: action.payload };
    case DepartmentsTypes.CLEAN_DEPARTMENTS:
      return { ...newState };
    default:
      return state;
  }
};

export default departmentsReducer;
