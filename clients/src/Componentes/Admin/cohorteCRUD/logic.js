import React, { useState, useEffect } from "react";
import View from "./view";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getAllCohort } from "../../../redux/actions/cohortActions";

function Crud() {
  const dispatch = useDispatch();
  const Rows = useSelector((state) => state.cohort.allCohort);

  const editarCohorte = (name, data) => {
    axios.put(`http://localhost:3001/cohort/${name}`, data).then((res) => {
      console.log(res.data);
    });
  };

  useEffect(() => {
    dispatch(getAllCohort());
  }, []);

  return (
    <div>
      <View data={Rows} edit={editarCohorte} />
    </div>
  );
}

export default Crud;
