import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { DataGrid } from "@material-ui/data-grid";
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {getAllStudents} from '../../../redux/actions/studentActions';
import {filterCohort} from '../../../redux/actions/cohortActions';
import {Modal} from 'reactstrap';
import s from '../../../styles/fichaAlumno.module.css';
import PerfilUser from './fichaAlumno'
import './view.css';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const modalClassname = s.modal_gral

function Crud(props) {
  const { rows, columns, cohort } = props;

  const students = useSelector(store => store.student.allStudents)
  const dispatch = useDispatch();  
  const [openModal, setOpenModal] = useState(false);
  const [student, setStudent] = useState()

  const stdId = (array) => {
    array.forEach(function (element, i) {
      element.id = i + 1;
      const cohort = element.cohorte && element.cohorte.name || null
      element.cohorte = cohort;
    });
    return array
  }

  const showProfile = (data) => {
    setOpenModal(true)
    setStudent(data)    
  }

  const toggle = () => {
    setOpenModal(false)
    setStudent()
  }
  
  useEffect( () => {   
    dispatch(getAllStudents());   
  }, [])   

  return (
    <div style={{ height: 400, width: "100%" }}>
      {
        students.length > 0 &&
        <DataGrid rows={students && stdId(students)} 
                  columns={columns} 
                  pageSize={5} 
                  onRowSelected={(item) => showProfile(item.data)}
                  />
      } 
      <Modal isOpen={openModal} toggle={toggle} className="modal ficha">
        <div >
          <div>
            {
              student &&
            <PerfilUser user={student} toggle={toggle}/>
            }
          </div>          
        </div>
      </Modal>

    </div>
  );
}

export default Crud;
