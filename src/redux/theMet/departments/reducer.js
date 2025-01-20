import DepartmentsTypes from "./action-types";
import { apiGetDepartments } from "../../../api/requests";

const initialState = {
  departments: [],
};

const departmentsReducer = async (state = initialState, action) => {
  let departmentsList = []
  switch (action.type) {
    case DepartmentsTypes.GET_DEPARTMENTS:
      departmentsList = await apiGetDepartments();
      return { ...state, departments: [...departmentsList] };
    default:
      return state;
  }
};

export default departmentsReducer;