import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { DataGrid } from "@material-ui/data-grid";
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import AddGrupo from './addGrupo'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import axios from 'axios'
import Borrar from './modalBorrar'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});





function Crud({cohort}) {


const[grup,setGrup] = useState([])

const classes = useStyles();
 
function traerGrupos(){
    axios.get('http://localhost:3001/group/all').then((res)=>{
      console.log(res.data)
      let filtrado = res.data.groups.filter(grupe => grupe.cohort.name == cohort)
      console.log(filtrado)
      return filtrado
    }).then(response=>{
      setGrup(response)

    })
}

  

  useEffect( () => {   
   traerGrupos()
   
  },[] )   



  return (
    <div>
      <TableContainer component={Paper}>
    <Table className={classes.table} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>grupos</TableCell>
          <TableCell align="right">editar</TableCell>
          <TableCell align="right">borrar</TableCell>
          <TableCell align="right">ir a</TableCell>
         
        </TableRow>
      </TableHead>
      <TableBody>
        {grup.map((grupo) => (
          <TableRow key={grupo._id}>
            <TableCell component="th" scope="row">{grupo.name}</TableCell>
            <TableCell align="right"><Button variant="contained" color="primary">Editar</Button></TableCell>
            <TableCell align="right"><Borrar grupo={grupo.name}/></TableCell>
            <TableCell align="right">{<Link to={`/test2/${grupo.name}`}>ver grupo</Link> }</TableCell>

          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
    <AddGrupo cohort={cohort}/>
    </div>
    
  );
}

export default Crud;
