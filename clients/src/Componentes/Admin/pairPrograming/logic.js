import React, { useState, useEffect } from "react";
import View from "./view";
import axios from 'axios'



function Crud() {
  
  
  const [rows,setRows] = useState([])

  const traerAlumnado = ()=>{
    axios.get("http://localhost:3001/student/all")
   
    .then((res)=>{
      
      let data = res.data.map(user=>{
        return {
            name:user.name + " " + user.lastName,
            id: user.code
        }
      })

      return data 
    }).then((resolve)=>{
      setRows(resolve)
    })
  }






  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'integrantes', headerName: ' integrantes', width: 130 },
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
      <View columns={columns} rows={[]}/>
    </div>
  );
}

export default Crud;
