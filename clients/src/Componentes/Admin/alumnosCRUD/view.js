import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { DataGrid } from "@material-ui/data-grid";
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {getAllStudents} from '../../../redux/actions/studentActions';
import {alumnCohortGLobal} from '../../../redux/actions/alum-cohort-action'
import {Link} from 'react-router-dom'


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function Crud(props) {
  const {columns, cohort } = props;

  const students = useSelector(store => store.student.allStudents)
  const dispatch = useDispatch(); 
  const [renderStudents, setRenderStudents] = useState([]);
  const[alumnos,setAlumnos] = useState([])
  const[filasSeleccionadas,setFilasSeleccionadas] = useState([])



  const stdId = (array) => {
    array.forEach(function (element, i) {
      element.id = i + 1;
    });
    return array
  }  


  const check = (data)=>{
    if(data.isSelected==true){
      setAlumnos(state => [...state,data.data.name])
    }
  }



  const filter = (students, cohort) => {
    if(!cohort) return students;
    const filtered = students[0] && students.filter(student => student.cohorte && student.cohorte.name === cohort)
    return filtered
  }
  





  
  useEffect( () => {   
    dispatch(getAllStudents())   
    dispatch(alumnCohortGLobal(filter(students,cohort)))
    setRenderStudents(filter(students, cohort))

  }, [])   

  return (
      <div>
    <div style={{ height: 400, width: "100%" }}>
      {
        students.length > 0 &&
        <DataGrid rows={renderStudents && stdId(renderStudents)} onRowSelected={(data)=>{check(data)}} onSelectionChange={e => setFilasSeleccionadas(e.rowIds)} columns={columns} pageSize={5} checkboxSelection />
      }
    </div>
     <button> <Link to="/test"> ir a grupos</Link> </button>
     </div>
  );
}

export default Crud;
