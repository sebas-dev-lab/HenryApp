import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {updateGroup} from '../../../redux/actions/adminActions'
import {putGroup} from '../../../redux/actions/groupActions'
import {useDispatch} from 'react-redux'
import MenuItem from '@material-ui/core/MenuItem';
import Transfer from './trasnferList'



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
   // console.log(alumnos)

   //este hook guarda el nombre que se pone en el grupo 
    const [groupName,setGroupName] = useState('')
    const [Pm,setPm] = useState('')


    const dispatch = useDispatch()




    const handleChange = (event) => {
      setPm(event.target.value);
    };



    //Esta funcion agarra los alumnos pasados y hace el dispatch con el nombre del grupo que se crea en el forumlario 
   function dispatchAlumnToGroup(alumns){

      alumns.map(alum=>{
        dispatch(updateGroup(alum.code, groupName ))
      })
   }


   //esta funcion despacha el pm para el grupo 
   function dispatchPmToGroup(pm){

      dispatch(putGroup(pm, groupName ))
    
 }

 //esta funcion trae una lista de usuarios que pertenecen al cohorte // usar la logica del search de cohorte 
  function traerPosiblesPM(){
     
  }


   



  useEffect(()=>{
    
  },[])


  return (
      <div style={{backgroundColor:"white"}}>
          <h2>Cree su grupo</h2>

        <form className={classes.root} noValidate autoComplete="off">
           
        <TextField id="outlined-basic" label="nombre del grupo" variant="outlined" onChange={e=>setGroupName(e.target.value)}/>
        <TextField
          id="outlined-select-currency"
          select
          label="PM"
          onChange={handleChange}
          value={Pm}
          helperText="seleccione un instructor"
          variant="outlined"
        >
          {/* example.map((example) => (
            <MenuItem key={example.value} value={example.value}>
              {example.label}
            </MenuItem>
          )) */}
        </TextField>
          <Transfer/>
        <Button variant="contained">Crear grupo</Button>


        </form>
      </div>
  );
}