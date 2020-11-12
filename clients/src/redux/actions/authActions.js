import actionTypes from "./actionTypes";
import axios from "axios";
import Swal from "sweetalert2";
import Toast from "../../Componentes/alerts/toast";

const url = "http://localhost:3001";
/*==== Login users local ==== */
export const authLogin = (email, password) => (dispatch) => {
  try {
    axios
      .post(`${url}/auth/login`, {
        email: email,
        password: password,
      })
      .then((res) => {
        dispatch({
          type: actionTypes.AUTH_LOGIN_LOCAL,
          user: res.data,
        });
        Swal.fire({
          position: "center",
          icon: "success",
          title: `¡Bienvenido!`,
          showConfirmButton: false,
          timer: 2000,
        }).catch((error) => {
          Toast.fire({
            icon: "error",
            title: "Error: email o contraseña no válidos",
          });
        });
      });
  } catch {
    dispatch({
      type: actionTypes.USER_LOGIN_ERROR,
      message: "Error de login",
    });
  }
};

export const logout = () => (dispatch) => {
  axios.post(`${url}/auth/logout`).then((res) => {
    dispatch({
      type: actionTypes.LOGOUT,
      message: "End session",
    }).catch((err) => console.log(err));
  });
};
