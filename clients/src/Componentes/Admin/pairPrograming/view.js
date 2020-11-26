import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import AddPP from './addPP'



export default function DataTable({rows,columns}) {


//traer los alumnos que sean de un grupo especifico para pasar al select del formulario 


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