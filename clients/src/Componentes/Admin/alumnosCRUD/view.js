import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { DataGrid } from "@material-ui/data-grid";
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {getAllStudents} from '../../../redux/actions/studentActions';
import {alumnCohortGLobal} from '../../../redux/actions/alum-cohort-action'
import {Link} from 'react-router-dom'
import {Modal} from 'reactstrap';
import { filterCohort } from "../../../redux/actions/cohortActions";
import { getStudent } from "../../../redux/actions/studentActions";
import PerfilUser from "./fichaAlumno";
import Button from '@material-ui/core/Button';
import FichaAlumno from "./fichaAlumno";

import s from "../../../styles/alumno.module.css";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const modalClassname = s.modal_gral;

function Crud(props) {
  const {columns, cohort } = props;
  localStorage.setItem("cohorte",cohort)
  const students = useSelector(store => store.student.allStudents)
    const dispatch = useDispatch(); 


  const [renderStudents, setRenderStudents] = useState([]);
  const[alumnos,setAlumnos] = useState([])
  const[filasSeleccionadas,setFilasSeleccionadas] = useState([])

  const [openModal, setOpenModal] = useState(false);
  const [student, setStudent] = useState();

  const stdId = (array) => {
    array.forEach(function (element, i) {
      element.id = i;
      const cohort = element.cohorte && element.cohorte.name;
      element.cohorte = cohort;
    });
    return array;
  };


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

  const showProfile = (data) => {
    setStudent(data);
    setOpenModal(true);
  };

  const toggle = () => {
    setOpenModal(false)
    setStudent()
  }
  


  
  useEffect( () => {   
    dispatch(getAllStudents()); 
    setRenderStudents(filter(students, cohort))  
    dispatch(alumnCohortGLobal(filter(students,cohort)))
    
    

  }, [])   

  return (
    <div>
    <div className={s.cont_alum}>
      <h1>Usuarios de HenryApp</h1>
      <div
        style={{
          height: 450,
          width: "73%",
          backgroundColor: "white",
          margin: "auto",
        }}
      >
        {renderStudents.length > 0 && (
          <DataGrid
            rows={renderStudents && stdId(renderStudents)}
            columns={columns}
            pageSize={5}
            onRowSelected={(item) => showProfile(item.data)}
          />
        )}
        <Modal isOpen={openModal} toggle={toggle}>
          <div>
            <div>
              {student && <FichaAlumno userData={student} toggle={toggle} />}
            </div>
          </div>
        </Modal>
      </div>
    </div>
    <Button variant="contained" color="primary"><Link to="/test" style={{textDecoration:"none", color:"white"}}> ir a grupos</Link> </Button>
     </div>
  );
}

export default Crud
