import React from "react";
import Nav from "../Componentes/Navbar";
import Tabla from "../Componentes/cohorteCRUD/logic";
import CardUsuario from "../Componentes/cardUsuario/logic";
import CardFunciones from "../Componentes/cardFunciones/logic";

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
