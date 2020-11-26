import React,{useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import {useSelector} from 'react-redux'
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


//TRAER LOS ALUMNOS DE UN GRUPO ESPECIFICO

export default function BasicTextFields({personas}) {
  const classes = useStyles();

  const [persona1, setPersona1] = useState('');
  const [persona2, setPersona2] = useState('');
  const [number, setNumber] = useState('');


  const [grupo1, setGrupo1] = useState([]);
  const [grupo2, setGrupo2] = useState([]);


  const handleChange1 = (event) => {
    setPersona1(event.target.value);
  };
  const handleChange2 = (event) => {
    setPersona2(event.target.value);
  };
  const handleChangeNumber = (event) => {
    setNumber(event.target.value);
  };



function enviarPair ( ){
  axios.post('http://localhost:3001/PP/create',{
    newPP:[persona1,persona2]
  })
}




  useEffect(()=>{
    setGrupo1(personas)
    setGrupo2(personas)
    

  

    
  },[persona1,persona2])


   // console.log(alumnos)
  return (
      <div style={{backgroundColor:"white"}}>
          

        <form className={classes.root} noValidate autoComplete="off">
          {/*disparar un select en cada label que tenga a los integrantes del grupo*/}
          <TextField id="pair-pp" label="numero de pair" variant="outlined" onChange={handleChangeNumber}/>
          <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={persona1}
          onChange={handleChange1}
        >
          {grupo1.map((example)=>{
            return  <MenuItem value={example.id}>{example.name}</MenuItem>
          })
        }
          
        </Select>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={persona2}
          onChange={handleChange2}
        >
          {grupo2.map((example)=>{
            return  <MenuItem value={example.id}>{example.name}</MenuItem>
          })
        }
        </Select>
        
        <Button variant="contained" onClick={enviarPair}>crear pair</Button>


        </form>
      </div>
  );
}