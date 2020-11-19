import * as actionTypes from "./actionTypes";
import axios from "axios";
import Toast from "../../Componentes/alerts/toast";
import Dialog from "../../Componentes/alerts/dialog";

const url = "http://localhost:3001"

export const postCalendar = (event) => async (dispatch) => {
    return await axios
      .post(`${url}/calendar/create`, event)
      .then((res) => {
        dispatch({
          type: actionTypes.CREATE_EVENT,
          event: res.data,
        });
        Toast.fire({
          icon: "success",
          title: `Se registro el evento: ${event.title}`,
        });
      })
      .catch((err) => {
        dispatch({
          error: err,
        });
        Toast.fire({
          icon: "error",
          title: "Error al crear evento",
        });
      });
  };

  export const getAllEvents = () => (dispatch) => {
    axios
      .get(`${url}/calendar/all`)
      .then((res) => {
        console.log('mostrar la response', res)
        dispatch({
          type: actionTypes.GET_ALL_EVENTS,
          allEvents: res.data,
        });
      })
      .catch((err) => console.log(err));
  };