import actionTypes from "./actionTypes";
import axios from "axios";

const url = "http://localhost:3001";

export const getAllCohort = () => (dispatch) => {
  axios
    .get(`${url}/cohort/all`)
    .then((res) => {
      dispatch({
        type: actionTypes.GET_ALL_COHORT,
        allCohort: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const updateCohort = (name, values) => async (dispatch) => {
  return await axios
    .put(`${url}/cohort/${name}`, values)
    .then((res) => {
      dispatch({
        type: actionTypes.PUT_COHORT,
        update: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const postCohort = (newCohort) => async (dispatch) => {
  return await axios
    .post(`${url}/cohort/create`, {
      newCohort: newCohort,
    })
    .then((res) => {
      dispatch({
        type: actionTypes.POST_COHORT,
        cohort: res.data,
      });
    })
    .catch((err) => console.log(err));
};
