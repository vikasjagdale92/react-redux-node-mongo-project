// authReducer.js

import { SET_CURRENT_USER } from "../actions/types";
import isEmpty from "../is-empty";

const initialState = {
  isAuthenticated: false,
  user: {},
  empData: [],
  editEmpData: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case "GET_EMPLOYEE_DATA":
      return {
        ...state,
        empData: action.payload
      };
    case "EDIT_EMP":
      return {
        ...state,
        editEmpData: action.payload
      };
    case "CLEAR_EDITED_DATA":
      return {
        ...state,
        editEmpData: action.payload
      };
    case "SEARCH_EMPLOYEE":
      console.log("reducers ------> ", action.payload);
      return {
        ...state
      };
    default:
      return state;
  }
}
