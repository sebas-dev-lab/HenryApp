import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';


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

  const [persona1, setPersona1] = useState('');
  const [persona2, setPersona2] = useState('');


  const handleChange1 = (event) => {
    setPersona1(event.target.value);
  };
  const handleChange2 = (event) => {
    setPersona2(event.target.value);
  };


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
          {/* ACA VAN LOS CHICOS QUE PERTENENCEN AL COHORTE 
            EL EJEMPLO PARA EL MAP <MenuItem value={10}>Ten</MenuItem>
          */}
          
        </Select>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={persona2}
          onChange={handleChange2}
        >
          {/* ACA VAN LOS CHICOS QUE PERTENENCEN AL COHORTE */}
        </Select>

        <Button variant="contained">crear pair</Button>


        </form>
      </div>
  );
}