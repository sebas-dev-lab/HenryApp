import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { DataGrid } from "@material-ui/data-grid";
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {getAllStudents} from '../../../redux/actions/studentActions';
import {filterCohort} from '../../../redux/actions/cohortActions';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function Crud(props) {
  const { rows, columns, cohort } = props;

  const students = useSelector(store => store.student.allStudents)
  const dispatch = useDispatch();  

  const stdId = (array) => {
    array.forEach(function (element, i) {
      element.id = i + 1;
      const cohort = element.cohorte && element.cohorte.name || null
      element.cohorte = cohort;
    });
    return array
  }
  
  useEffect( () => {   
    dispatch(getAllStudents());    
  }, [])   

  return (
    <div style={{ height: 400, width: "100%" }}>
      {
        students.length > 0 &&
        <DataGrid rows={students && stdId(students)} columns={columns} pageSize={5} />
      }
    </div>
  );
}

export default Crud;
