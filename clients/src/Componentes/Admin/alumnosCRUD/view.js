import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { DataGrid } from "@material-ui/data-grid";
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {getAllStudents} from '../../../redux/actions/studentActions';
import s from '../../../styles/alumno.module.css'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function Crud(props) {
  const { rows, columns, cohort } = props;

  const students = useSelector(store => store.student.allStudents)
  const dispatch = useDispatch(); 
  const [renderStudents, setRenderStudents] = useState([]);


  const stdId = (array) => {
    array.forEach(function (element, i) {
      element.id = i + 1;
    });
    return array
  }  

  const filter = (students, cohort) => {
    if(!cohort) return students;
    const filtered = students[0] && students.filter(student => student.cohorte && student.cohorte.name === cohort)
    return filtered
  }
  
  useEffect( () => {   
    dispatch(getAllStudents())   
    setRenderStudents(filter(students, cohort)) 
  }, [])   

  return (
    <div className={s.cont_alum}>
      <h1>Usuarios de HenryApp</h1>
    <div style={{ height: 450, width: "73%", backgroundColor: "white", margin:"auto"}}>
      {
        students.length > 0 &&
        <DataGrid rows={renderStudents && stdId(renderStudents)} columns={columns} pageSize={5} />
      }
    </div>
    </div>
  );
}

export default Crud;
