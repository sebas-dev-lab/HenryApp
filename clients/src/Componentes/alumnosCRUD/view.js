import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { DataGrid } from "@material-ui/data-grid";
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react'
import {getAllStudents} from '../../redux/actions/studentActions';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function Crud(props) {
  const { rows, columns } = props;

  const students = useSelector(store => store.student.allStudents)
  const dispatch = useDispatch(); 
  
  console.log(props.match)
  const stdId = (array) => {
    array.forEach(function (element, i) {
      element.id = i + 1;
    });
    return array
  }  
  
  useEffect( () => {   
    dispatch(getAllStudents())    
  }, []) 

  return (
    <div style={{ height: 400, width: "100%" }}>
      {
        students.length > 0 &&
        <DataGrid rows={stdId(students)} columns={columns} pageSize={5} />
      }
    </div>
  );
}

export default Crud;
