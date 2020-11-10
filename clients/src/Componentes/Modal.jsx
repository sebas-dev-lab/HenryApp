import React from "react";
import { Modal, Button, TexField } from "@material-ui/core";

export default function Modal() {
  const styles = useStyles();
  const bodyInsertar = (
    <div className={styles.modal}>
      <h3>Agregar Nuevo email</h3>
      <TexField className={styles.inputMaterial} label="Email" />
      <br />
      <br />
      <div aling="right">
        <Button color="primary">Agregar</Button>
        <Button color="primary">Cancelar</Button>
      </div>
    </div>
  );
}
