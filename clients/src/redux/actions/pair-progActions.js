import * as actionTypes from "./actionTypes";
import axios from "axios";

const url = "http://localhost:3001";

export const getAllPairs = () => (dispatch) => {
  axios
    .get(`${url}/PP/all`)
    .then((res) => {
      dispatch({
        type: actionTypes.GET_ALL_PAIRS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const getOnePair = (id) => (dispatch) => {
  axios
    .get(`${url}/PP/`,{
        id:id
    })
    .then((res) => {
      dispatch({
        type: actionTypes.GET_PAIR_BY_ID,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const postPP = (newPP) => (dispatch) => {
  axios
    .post(`${url}/PP/create`, {
      newPP: newPP
    })
    .then((res) => {
      dispatch({
        type: actionTypes.POST_PP,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};


//TODO: Falta: 
