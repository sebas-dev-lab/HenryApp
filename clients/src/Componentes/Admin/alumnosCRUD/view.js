import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { DataGrid } from "@material-ui/data-grid";
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {getAllStudents} from '../../../redux/actions/studentActions';
import {filterCohort} from '../../../redux/actions/cohortActions';
import {Modal} from 'reactstrap';

import PerfilUser from './fichaAlumno'
import './view.css';

import s from '../../../styles/alumno.module.css'

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
    <div className={s.cont_alum}>
      <h1>Usuarios de HenryApp</h1>
    <div style={{ height: 450, width: "73%", backgroundColor: "white", margin:"auto"}}>
      {
        students.length > 0 &&
        <DataGrid rows={students && stdId(students)} 
                  columns={columns} 
                  pageSize={5} 
                  onRowSelected={(item) => showProfile(item.data)}
                  />
      } 
      <Modal isOpen={openModal} toggle={toggle} className="ficha">
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
    </div>
  );
}

export default Crud;
