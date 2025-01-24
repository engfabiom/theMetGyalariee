import DepartmentsTypes from "./action-types";

const initialState = {
  status: null,
  error: null,
  data: [],
};

const departmentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DepartmentsTypes.SET_DEPARTMENTS + "_PENDING":
    case DepartmentsTypes.CLEAN_DEPARTMENTS + "_PENDING":
      return { ...state, status: "pending" };

    case DepartmentsTypes.SET_DEPARTMENTS + "_REJECTED":
      case DepartmentsTypes.CLEAN_DEPARTMENTS + "_REJECTED":
      return { ...state, status: "rejected", error: action.payload };

    case DepartmentsTypes.SET_DEPARTMENTS + "_FULFILLED":
      return {...state, status: "fulfilled", error: null, data: action.payload };

    case DepartmentsTypes.CLEAN_DEPARTMENTS + "_FULFILLED":
      return {...state, status: "fulfilled", error: null, data: [] };

    default:
      return state;
  }
};

export default departmentsReducer;
