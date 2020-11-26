import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { DataGrid } from "@material-ui/data-grid";
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {getAllStudents} from '../../../redux/actions/studentActions';
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

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});





function Crud(props) {



  const {columns,grupos} = props;

  const dispatch = useDispatch(); 
  const[alumnos,setAlumnos] = useState([])
  const [filasSeleccionadas,setFilasSeleccionadas]=useState('')


const classes = useStyles();



  const check = (data)=>{
    if(data.isSelected==true){
      setAlumnos(state => [...state,data.data.name])
    }
  }





  const hardcode = [
    {id:1,name:"grupo01",},
    {id:2,name:"grupo02",},
    {id:3,name:"grupo03",},
    {id:4,name:"grupo04",},

  ]






  useEffect( () => {   
   console.log(grupos)
    
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
        {hardcode.map((row) => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">{row.name}</TableCell>
            <TableCell align="right"><Button variant="contained" color="primary">Editar</Button></TableCell>
            <TableCell align="right"><Button variant="contained" color="primary">Borrar</Button></TableCell>
            <TableCell align="right">{<Link to={"/test2"}>ver grupo</Link> }</TableCell>

          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
    <AddGrupo/>
    </div>
    
  );
}

export default Crud;
