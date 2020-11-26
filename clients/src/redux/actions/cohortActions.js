import * as actionTypes from "./actionTypes";

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
        name: name,
      });
    })
    .catch((err) => console.log(err));
};

export const getOneCohort = (id) => (dispatch) => {
  axios
    .get(`${url}/cohort/${id}`)
    .then((res) => {
      dispatch({
        type: actionTypes.GET_ONE_COHORT,
        cohort: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const postCohort = (name, startDate) => (dispatch) => {
  return axios
    .post(
      `${url}/cohort/create`,
      {
        name: name,
        startDate: startDate,
      },
      {
        withCredentials: true,
      }
    )
    .then((res) => {
      console.log(res, "cohortres");
      dispatch({
        type: actionTypes.POST_COHORT,
        cohort: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const filterCohort = (cohort) => async (dispatch) => {
  try {
    await axios
      .get(`${url}/cohort/students?cohort=${cohort}`,{withCredentials: true})
      .then((res) => {    
        dispatch({
          type: actionTypes.FILTER_COHORT,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  } catch(err) {
    console.log("error", err);
  }   
}
