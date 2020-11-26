import React, { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";

import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {filterCohort} from '../../../redux/actions/cohortActions';
import {Link} from 'react-router-dom'

import FichaAlumno from "./fichaAlumno";
import { Modal } from "reactstrap";



export default function AlumnosXCohorte({ cohortFilter }) {

  const cohorte = useSelector(store => store.cohort.cohort);
  const [openModal, setOpenModal] = useState(false);
  const [student, setStudent] = useState();
  const dispatch = useDispatch();    

  const columns = [
    { field: "name", headerName: "Nombre", width: 130 },
    { field: "lastName", headerName: "Apellido", width: 130 },
    { field: "dni", headerName: "DNI", width: 130 },
    { field: "email", headerName: "Email", width: 90 },
    { field: "cohorte", headerName: "Cohorte", width: 90 },
  ];

  const stdId = (array) => {
    array.forEach(function (element, i) {
      element.id = i;
      const cohort = element.cohorte && element.cohorte.name;
      element.cohorte = cohort;
    });
    return array;
  };

  const showProfile = (data) => {
    setStudent(data);
    setOpenModal(true);
  };

  const toggle = () => {
    setOpenModal(false);
    setStudent();
  };

  const showProfile = (data) => {
    setStudent(data);
    setOpenModal(true);
  };

  const toggle = () => {
    setOpenModal(false);
    setStudent();
  };

  useEffect(() => {
    dispatch(filterCohort(cohortFilter));
  }, []);

  return (
    <div>
      <div>
        <h1>{cohortFilter}</h1>
      </div>
      <div style={{ height: 400, width: "100%" }}>

        <DataGrid
          rows={(cohorte[0] && stdId(cohorte)) || []}
          columns={columns}
          pageSize={5}
          onRowSelected={(item) => showProfile(item.data)}
        />
      </div>
        <button> <Link to="/test"> ir a grupos</Link> </button>
      <Modal isOpen={openModal} toggle={toggle}>
        <div>
          <div>
            {student && <FichaAlumno userData={student} toggle={toggle} />}
          </div>
        </div>
      </Modal>
    </div>
  );
}
