import React, { useState } from 'react';
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
  const [Name,setName]=useState('')


  function sendData(){
    axios.post('http://localhost:3001/cohort/create',{
      name:Name
    }).then(res=>{
      return console.log(res.data)
    })
  }





  return (
    <form className={classes.root} noValidate autoComplete="off" style={{backgroundColor:"white",display:"flex",
    flexDirection:"column",width:"400px",position:"relative",left:"35%",top:"30%",}} >
      <div style={{margin:"25px auto"}}>
          <TextField id="outlined-basic" label="Nombre de cohorte" variant="outlined" style={{marginBottom:"10px"}} onChange={e=>{setName(e.target.value)}} />
          <TextField id="outlined-basic" label="fecha de inicio" variant="outlined" style={{marginBottom:"10px"}} />
          <Button variant="contained" color="primary" onClick={sendData}>
            Enviar
          </Button>

      </div>
    </form>
  );
}
