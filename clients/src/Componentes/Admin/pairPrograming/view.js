import React,{useEffect} from 'react';
import { DataGrid } from '@material-ui/data-grid';
import AddPP from './addPP'
import axios from 'axios'



export default function DataTable({rows,columns}) {


//traer los alumnos que sean de un grupo especifico para pasar al select del formulario 



const traerPair=()=>{
  axios.get ('http://localhost:3001/PP/all').then((res)=>{
    console.log(res.data)
  })
}



useEffect(()=>{
traerPair()

},[])


  return (
    <div>
      <div style={{ height: 400, width: '100%' }}>

        <DataGrid rows={rows} columns={columns} pageSize={8}/>
        
      </div>
      {/* le paso los datos de alumno */}
    <AddPP />
    </div>
    );
}