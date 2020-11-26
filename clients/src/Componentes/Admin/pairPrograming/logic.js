import React, { useState, useEffect } from "react";
import View from "./view";
import axios from 'axios'
import {useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'


function Crud() {
  
  
  const [rows,setRows] = useState([])
  const grupo = useParams()
  console.log(grupo)


  const alumnos = useSelector(state=>state.cohort.cohort)


  const traerAlumnado = ()=>{
    axios.get(`http://localhost:3001/group/${grupo.grupo}`)
   
    .then((res)=>{
     let dato = res.data.groups[0].students.map(user=>{
        return {
            name:user.name + " " + user.lastName,
            code: user.code,
            id:user._id
        }
      })

      return dato 
    }).then((resolve)=>{
      setRows(resolve)
    }) 
  }






  const columns = [
    { field: 'code', headerName: 'ID', width: 70 },
    { field: 'name', headerName: ' nombre', width: 130 },
    { field: 'pair', headerName: ' numero de pair ', width: 130 },
    
    
   
  ];
  
/*   const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
 */











    useEffect(()=>{
      traerAlumnado()
    },[])



    //traer tambien instructor

  return (
    <div>
      <View columns={columns} rows={rows}/>
    </div>
  );
}

export default Crud;
