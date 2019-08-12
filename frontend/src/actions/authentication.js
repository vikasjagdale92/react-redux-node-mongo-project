// authentication.js

import axios from "axios";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import setAuthToken from "../setAuthToken";
import jwt_decode from "jwt-decode";

export const registerUser = (user, history) => dispatch => {
  // console.log(user);
  axios
    .post("/api/users/register", user)
    .then(res => history.push("/login"))
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

export const loginUser = user => dispatch => {
  axios
    .post("/api/users/login", user)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

export const logoutUser = history => dispatch => {
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  dispatch(setCurrentUser({}));
  history.push("/login");
};

export const empProfile = data => dispatch => {
  console.log("data is ---> ", data);

  axios
    .post("/api/empProfiles/empAddData", data) //empAddData is route path /empAddData from ./empProfiles.js
    .then(res => {
      console.log(res);
      axios
        .get("/api/empProfiles/empShowData") // get data from db and dispatch action
        .then(res => {
          dispatch({
            type: "GET_EMPLOYEE_DATA",
            payload: res.data
          });
          dispatch({
            type: "CLEAR_EDITED_DATA",
            payload: ""
          });
        })
        .catch(err => {
          console.log("err--->", err);
        });
    })
    .catch(err => {
      console.log(err);
    });
};

export const deleteEmployee = emp_Id => dispatch => {
  // console.log("emp id is ------> ", emp_Id);
  axios
    .post("/api/empProfiles/empRemove", { emp_Id })
    .then(res => {
      // console.log("res ----> ", res);
      axios
        .get("/api/empProfiles/empShowData")
        .then(res => {
          dispatch({
            type: "GET_EMPLOYEE_DATA",
            payload: res.data
          });
        })
        .catch(err => {
          console.log(err);
        });
    })
    .catch(err => {
      console.log("err -------> ", err);
    });
};

export const editEmployee = empId => dispatch => {
  console.log("id -------> ", empId);
  axios.post("/api/empProfiles/empEdit", { empId }).then(res => {
    console.log("res ---> ", res);
    dispatch({
      type: "EDIT_EMP",
      payload: res.data
    });
  });
};

export const searchEmployee = searchValue => dispatch => {
  // console.log("action --> ", searchValue);
  // dispatch({
  //   type: "SEARCH_EMPLOYEE",
  //   payload: searchValue
  // });
  axios
    .post("/api/empProfiles/searchEmp", { searchValue })
    .then(res => {
      console.log("res of search value is ---> ", res);
      dispatch({
        type: "GET_EMPLOYEE_DATA",
        payload: res.data
      });
    })
    .catch(err => {
      console.log("err ---------->", err);
    });
};
