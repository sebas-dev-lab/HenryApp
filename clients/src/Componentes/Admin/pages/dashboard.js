import React from "react";
import Nav from "../../Navbar";
import Tabla from "../cohorteCRUD/logic";
import CardUsuario from "../cardUsuario/logic";
import CardFunciones from "../cardFunciones/logic";


const Dashboard = () => {
  return (
    <div>
      <Nav />
      <div style={{ display: "flex" }}>
        <CardUsuario />
        <CardFunciones />
      </div>
        <Tabla />  
    </div>
  );
};

export default Dashboard;
