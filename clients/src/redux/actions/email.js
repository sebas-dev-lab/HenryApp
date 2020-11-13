import * as actionTypes from "./actionTypes";
import axios from "axios";

const url = "http://localhost:3001";

export const getEmail = () => (dispatch) => {
  axios
    .get(`${url}/email/all`)
    .then((res) => {
      dispatch({
        type: actionTypes.GET_EMAIL,
        allEmails: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const postEmail = (newEmail) => (dispatch) => {
  axios
    .post(`${url}/email/create`, newEmail)
    .then((res) => {
      dispatch({
        type: actionTypes.POST_EMAIL,
        email: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const putEmail = (email, updateEmail) => (dispatch) => {
  axios
    .put(`${url}/email/${email}`, updateEmail)
    .then((res) => {
      dispatch({
        type: actionTypes.PUT_EMAIL,
        updateEmail: res.data,
        email: email,
      });
    })
    .catch((err) => console.log(err));
};

export const deleteEmail = (email) => (dispatch) => {
  axios
    .delete(`${url}/email/${email}`)
    .then((res) => {
      dispatch({
        type: actionTypes.DELETE_EMAIL,
        message: "Email deleted",
      });
    })
    .catch((err) => console.log(err));
};
