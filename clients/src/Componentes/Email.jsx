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
  Button,
  TexField,
} from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";
import bodyInsertar from "./Modal";
import Axios from "axios";

export default function Emails() {
  const classes = useStyles();

  //-------Hooks----
  const [data, setData] = useState([]);
  const [modalInsertar, setModalInsertar] = useState(false);

  useEffect(() => {
    Axios.get("http://localhost:3001/email/all").then((response) => {
      setData(response.data);
    });
  }, []);

  //Funcion para abrir y cerrar el modal
  const AbrirCerrar = () => {
    setModalInsertar(!modalInsertar);
  };

  return (
    <div className="Emails">
      <br />
      <Button onClick={AbrirCerrar}>Agregar</Button>
      <br />
      <br />
      <TableContainer>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Invitación a HenryApp</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">Acciones</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((consola) => (
              <StyledTableRow key={consola.id}>
                <StyledTableCell component="th" scope="row">
                  {consola.email}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  <Edit />
                  &nbsp; &nbsp; &nbsp;
                  <Delete />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal>
        open={modalInsertar}
        onClose={AbrirCerrar}
        {<bodyInsertar />}
      </Modal>
    </div>
  );
}
