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
import { Edit, Delete, Add } from "@material-ui/icons";
// import styles from "../styles/email.module.css";
import Axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 300,
    flexGrow: 1,
    minWidth: 300,
    transform: "translateZ(0)",
    "@media all and (-ms-high-contrast: none)": {
      display: "none",
    },
  },
  modal: {
    position: "absolute",
    width: 300,
    backgroundColor: theme.palette.common.white,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: "50%",
    left: "50px",
    transform: "translate (-50%, -50%)",
  },
  iconos: {
    cursor: "pointer",
  },
  inputMaterial: {
    width: "100%",
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
        className={styles.inputMaterial}
        label="Email"
        name="email"
        onChange={handleChange}
      />
      <br />
      <br />
      <div aling="right">
        <Button variant="contained" color="secondary" onClick={Aceptar}>
          Aceptar
        </Button>
        <Button variant="contained" color="primary" onClick={AbrirCerrar}>
          Cancelar
        </Button>
      </div>
    </div>
  );
  const bodyEditar = (
    <div className={styles.modal}>
      <h3>Editar email</h3>
      <TextField
        className={styles.inputMaterial}
        label="Email"
        name="email"
        onChange={handleChange}
        value={emailSeleccionado && emailSeleccionado.email}
      />
      <br />
      <br />
      <div aling="right">
        <Button color="primary">Ediatr</Button>
        <Button color="primary">Cancelar</Button>
      </div>
    </div>
  );
  return (
    <div className="emails">
      <br />
      <Fab color="primary" aria-label="add" onClick={AbrirCerrar}>
        <Add />
      </Fab>
      <br />
      <br />
      <TableContainer>
        <Table className={styles.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Email</TableCell>
              <TableCell align="right">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((newEmail) => (
              <TableRow key={newEmail.id}>
                <TableCell component="th" scope="row">
                  {newEmail.email}
                </TableCell>
                <TableCell component="th" scope="row">
                  <Edit className={styles.iconos} />
                  &nbsp; &nbsp; &nbsp;
                  <Delete className={styles.iconos} />
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
