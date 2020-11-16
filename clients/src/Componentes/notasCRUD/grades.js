import React from 'react';
import View from './view'


const columns = [
  { field: 'nombre', headerName: 'nombre', width: 130 },
  { field: 'apellido', headerName: 'apellido', width: 130 },
  { field: 'DNI', headerName: 'DNI', width: 130 },
  { field: 'calificacion', headerName: 'calification', width: 90 },
  
];

const rows = [
  { id: 1, lastName: 'Snow', name: 'Jon',DNI:40890890, calificacion: 60  },
  { id: 2, lastName: 'Lannister', name: 'Cersei',DNI:40890890, calificacion: 60  },
  { id: 3, lastName: 'Lannister', name: 'Jaime',DNI:40890890, calificacion: 60  },
  { id: 4, lastName: 'Stark', name: 'Arya',DNI:40890890, calificacion: 60  },
  { id: 5, lastName: 'Targaryen', name: 'Daenerys',DNI:40890890, calificacion: 60  },
  { id: 6, lastName: 'Melisandre', name: "pancho",DNI:40890890, calificacion: 60  },
  { id: 7, lastName: 'Clifford', name: 'Ferrara',DNI:40890890, calificacion: 60  },
  { id: 8, lastName: 'Frances', name: 'Rossini',DNI:40890890, calificacion: 60  },
  { id: 9, lastName: 'Roxie', name: 'Harvey',DNI:40890890, calificacion: 60  },
];

export default function DataTable() {
  return (

    <View columns={columns} rows={rows} />
    
  );
}