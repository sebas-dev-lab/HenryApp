import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

export default function BasicTextFields({grupo}) {
  const classes = useStyles();

  function eliminarElemento(){
      axios.delete(`http://localhost:3001/group/${grupo}`)
  }

  return (
    <form className={classes.root} noValidate autoComplete="off"
    style={{backgroundColor:"white", width:"45%"}}>
      <h2>seguro que desea eliminar este elemento</h2>
      <Button variant="contained" color="primary" onClick={eliminarElemento}>
            eliminar
    </Button>
    </form>
  );
}