import React from "react";
import View from "./view";

const columns = [
  { field: "name", headerName: "Nombre", width: 130 },
  { field: "lastName", headerName: "Apellido", width: 130 },
  { field: "dni", headerName: "DNI", width: 130 },
  { field: "email", headerName: "Email", width: 250 },
  { field: "cohorte", headerName: "Cohorte", width: 130 },
];


export default function DataTable({ cohort }) {
  return <View columns={columns} rows={rows} cohort={cohort} />;
}
