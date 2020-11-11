import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Modal,
  Fab,
  Button,
  TextField,
} from "@material-ui/core";
import {
  Edit,
  Delete,
  AddCircle,
  CheckCircle,
  Cancel,
} from "@material-ui/icons";
import style from "../styles/email.module.css";
import Axios from "axios";

const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    width: 300,
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: "50%",
    left: "50px",
    transform: "translate (-50%, -50%)",
  },
}));

export default function Emails() {
  const styles = useStyles();
  //-------Hooks----
  const [data, setData] = useState([]);
  const [modalInsertar, setModalInsertar] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [emailSeleccionado, setEmailSeleccionado] = useState({
    email: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailSeleccionado((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  useEffect(async () => {
    //prettier-ignore
    await Axios.get("http://localhost:3001/email/all")
    .then(response => {
      setData(response.data);
    });
  }, []);

  const Aceptar = async () => {
    //prettier-ignore
    await Axios.post(
      "http://localhost:3001/email/create",
      emailSeleccionado
    ).then(response => {
      setData(data.concat(response.data))
       AbrirCerrar();
    });
  };

  //Funcion para abrir y cerrar el modal
  const AbrirCerrar = () => {
    setModalInsertar(!modalInsertar);
  };

  //Funcion para abrir y cerrar el modal al Editar
  const Editar = () => {
    setModalEditar(!modalEditar);
  };

  const bodyInsertar = (
    <div className={styles.modal}>
      <h3>Agregar Nuevo email</h3>
      <TextField
        className={style.inputMaterial}
        label="Email"
        name="email"
        onChange={handleChange}
      />
      <br />
      <br />
      <div aling="center">
        <CheckCircle
          className={style.aceptar}
          fontSize="large"
          onClick={Aceptar}
        />
        &nbsp; &nbsp; &nbsp;
        <Cancel
          className={style.cancelar}
          fontSize="large"
          onClick={AbrirCerrar}
        />
      </div>
    </div>
  );
  const bodyEditar = (
    <div className={styles.modal}>
      <h3>Editar email</h3>
      <TextField
        className={style.inputMaterial}
        label="Email"
        name="email"
        onChange={handleChange}
        value={emailSeleccionado && emailSeleccionado.email}
      />
      <br />
      <br />
      <div aling="right">
        <CheckCircle className={style.aceptar} />
        &nbsp; &nbsp; &nbsp;
        <Cancel className={style.cancelar} />
      </div>
    </div>
  );
  return (
    <div className={style.emails}>
      <br />
      <AddCircle className={style.add} fontSize="large" onClick={AbrirCerrar} />
      <br />
      <br />
      <TableContainer>
        <Table className={style.table} aria-label="customized table">
          <TableHead className={style.contenedor}>
            <TableRow>
              <TableCell align="left">
                <h3>
                  <b>Email</b>
                </h3>
              </TableCell>
              <TableCell align="right">
                <h3>
                  <b>Acciones</b>
                </h3>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((newEmail) => (
              <TableRow key={newEmail.id}>
                <TableCell component="th" scope="row">
                  {newEmail.email}
                </TableCell>
                <TableCell component="th" scope="row" align="right">
                  <Edit className={style.editar} />
                  &nbsp; &nbsp; &nbsp;
                  <Delete className={style.delete} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal open={modalInsertar} onClose={AbrirCerrar}>
        {bodyInsertar}
      </Modal>
      <Modal open={modalEditar} onClose={Editar}>
        {bodyEditar}
      </Modal>
    </div>
  );
}
