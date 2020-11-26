import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {updateGroup} from '../../../redux/actions/adminActions'
import {putGroup,postGroup} from '../../../redux/actions/groupActions'
import {useDispatch,useSelector} from 'react-redux'
import MenuItem from '@material-ui/core/MenuItem';
import Transfer from './trasnferList'
import axios from 'axios'



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      width: '25ch',
    },
  },
}));



export default function BasicTextFields({cohort}) {
  const classes = useStyles();
   // console.log(alumnos)

   //este hook guarda el nombre que se pone en el grupo 
    const [groupName,setGroupName] = useState('')
    const [Pm,setPm] = useState('')
    const [tode, setTode] = useState([])
    const alumnos = useSelector(store=>store.alumnCohort.alumnsCohort)
    const elegidos = useSelector(store=>store.alumnCohort.alumnsGrupo)




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


  

 //esta funcion trae una lista de usuarios que pertenecen al cohorte // usar la logica del search de cohorte 
  function traerPosiblesPM(){
    return alumnos.map(alum=>{
       return {name:alum.name,code:alum.code}
     })
  }

 //esta funcion despacha el pm para el grupo 
 function dispatchPmToGroup(pm){

  dispatch(putGroup(pm, groupName ))

}




function GrupoCohorte (){
  axios.put(`http://localhost:3001/group/cohort/${groupName}/${cohort}`)
}




function enviarPm(pm){
  axios
    .post(`http://localhost:3001/group/pm/${pm}`, groupName)
}





function CrearGrupo(){
  dispatch(postGroup(groupName))
  enviarPm(Pm)
  dispatchAlumnToGroup(elegidos)
  GrupoCohorte()

}


   






  useEffect(()=>{
    setTode(traerPosiblesPM())
  },[])


  return (
      <div style={{backgroundColor:"white",display:"flex",flexDirection:"column",width:"30%",padding:"15px", position:"relative",left:"35%",top:"25%"}}>
          <h2>Cree su grupo</h2>

        <form className={classes.root} noValidate autoComplete="off">
           
           <TextField id="outlined-basic" label="nombre del grupo" variant="outlined" onChange={e=>setGroupName(e.target.value)}/>
        <TextField
          id="outlined-select-currency"
          select
          label="PM"
          onChange={handleChange}
          value={Pm}
          helperText="seleccione un PM"
          variant="outlined"
        >
          {tode.map((example) => (
            <MenuItem key={example.code} value={example.name}>
              {example.name}
            </MenuItem>
          ))}
          
        </TextField>
           
       
        <div style={{width:"900px"}}>
            
        <Transfer/>
          </div>
        <Button variant="contained" onClick={CrearGrupo}>Crear grupo</Button>
        

        </form>
      </div>
  );
}