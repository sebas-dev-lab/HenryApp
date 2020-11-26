import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  function editarElemento(){
    axios.delete(`http://localhost:3001/group/${grupo}`)
}





  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Editar" variant="outlined" />
      <Button variant="contained" color="primary" onClick={editarElemento}>
            Cambiar
    </Button>
    </form>
  );
}