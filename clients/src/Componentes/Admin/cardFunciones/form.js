import React, { useState,useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { postCohort, getAllCohort } from "../../../redux/actions/cohortActions";
import {update_Cohort} from '../../../redux/actions/adminActions'
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function BasicTextFields({ open, handleOpen }) {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [Name, setName] = useState("");
  const [date, setDate] = useState("");
  const [inst, setInst] = useState([]);
  const [instructores, setInstructores] = useState([]);





  const handleOnchange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const handleOnchange_2 = (e) => {
    e.preventDefault();
    setDate(e.target.value);
  };

  const handleChange = (event) => {
    setInst(event.target.value);
  };



  function sendData() {
    dispatch(postCohort(Name, date))   
    dispatch(getAllCohort());
    dispatch(update_Cohort(inst,Name))
  }





//funcion que trae los instructores para que se puedan renderizar en el select 
  function traerInstructores(){ 
    axios.get('http://localhost:3001/instructor/all').then(res => {
      let instructores = res.data.map((instructor) => {
        return {
          value:instructor.code,
          label:instructor.name
        }
  
      })  
      
      return instructores
    
    }).then((response)=>{
      console.log(response)
      setInstructores(response)
    }) 
  
  
    handleOpen();
    Swal.fire({
      position: "center",
      icon: "success",
      title: `¡El modulo se ha creado con exito!`,
      showConfirmButton: false,
      timer: 2000,
    });
  }



  useEffect(()=>{
    traerInstructores()
  },[])



  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        width: "400px",
        position: "relative",
        left: "35%",
        top: "30%",
      }}
    >
      <div style={{ margin: "25px auto" }}>
        <TextField
          id="outlined-basic"
          label="Nombre de cohorte"
          variant="outlined"
          style={{ marginBottom: "10px" }}
          onChange={handleOnchange}
        />
        <TextField
        id="date"
        label="Cohorte"
        type="date"
        defaultValue="2020-18-11"
        className="date__select"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={handleOnchange_2}
      />
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Instructor"
          onChange={handleChange}
          value={inst}
          helperText="seleccione un instructor"
          variant="outlined"
        >
          {instructores.map((instructor) => (
            <MenuItem key={instructor.value} value={instructor.value}>
              {instructor.label}
            </MenuItem>
          ))}
        </TextField>
      </div>


        <Button variant="contained" color="primary" onClick={sendData}>
          Enviar
        </Button>
      </div>



    </form>
  );
}
