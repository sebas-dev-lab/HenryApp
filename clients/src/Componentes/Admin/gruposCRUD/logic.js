import React, { useEffect, useState } from "react";
import View from "./view";
import {useSelector,useDispatch} from 'react-redux'
import {getAllGroups,postGroup} from '../../../redux/actions/groupActions'

const columns = [
  { field: "name", headerName: "Nombre de Grupo", width: 130 },
  { field: "action", headerName: "accion", width: 130 }

];



export default function DataTable() {  

const dispatch = useDispatch()
const nombreCohorte = localStorage.getItem("cohorte")



useEffect(()=>{
  dispatch(getAllGroups())
  
},[])
//se van a renderizar los grupos 
  return <View columns={columns} cohort={nombreCohorte} />;
}
