import React,{useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import {useSelector} from 'react-redux'
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


//TRAER LOS ALUMNOS DE UN GRUPO ESPECIFICO

export default function BasicTextFields() {
  const classes = useStyles();

  const [persona1, setPersona1] = useState('');
  const [persona2, setPersona2] = useState('');
  const [grupo1, setGrupo1] = useState('');
  const [grupo2, setGrupo2] = useState('');


  const alumnos = useSelector(state=>state.cohort.cohort)

  


  const handleChange1 = (event) => {
    setPersona1(event.target.value);
  };
  const handleChange2 = (event) => {
    setPersona2(event.target.value);
  };




  function personas(){
    return alumnos.map(alum=>{
       return {name:alum.name,code:alum.code}
     })
  }

  console.log(personas())


  useEffect(()=>{
    setGrupo1(personas())
    setGrupo2(personas())

  

    
  },[])


   // console.log(alumnos)
  return (
      <div style={{backgroundColor:"white"}}>
          

        <form className={classes.root} noValidate autoComplete="off">
          {/*disparar un select en cada label que tenga a los integrantes del grupo*/}
          <TextField id="pair-pp" label="numero de pair" variant="outlined" />
          <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={persona1}
          onChange={handleChange1}
        >
          {grupo1.map((example)=>{
            return  <MenuItem value={example.code}>{example.name}</MenuItem>
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
            return  <MenuItem value={example.code}>{example.name}</MenuItem>
          })
        }
        </Select>
        {console.log(persona2)}
        <Button variant="contained">crear pair</Button>


        </form>
      </div>
  );
}