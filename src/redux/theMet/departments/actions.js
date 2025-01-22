import DepartmentsTypes from "./action-types";

export const theMetSetDepartments = (payload) => ({
  type: DepartmentsTypes.SET_DEPARTMENTS,
  payload,
});
export const theMetCleanDepartments = () => ({
  type: DepartmentsTypes.CLEAN_DEPARTMENTS,
});