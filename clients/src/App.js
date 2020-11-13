import React from "react";
import Home from "./Componentes/Home";
import Navbar from "./Componentes/Navbar";
import { Route, Switch, Link } from "react-router-dom";
import Registro from "./Componentes/loginUser.js";
import Login2 from "./Componentes/login/Login2.jsx";
import Dashboard from "./pages/dashboard";
import Alumn from "./Componentes/alumnosCRUD/logic";
import Email from "./Componentes/Email";
import BotonChat from "./Componentes/Chat/BotonChat";

function App() {
  return (
    <div>
      <Switch>
        {/* login2 */}
        <Route path="/login2" exact>
          <Login2 />
        </Route>
        {/* login2 */}

        {/* HOME */}
        <Route path="/" exact>
          <Home></Home>
        </Route>
        {/* HOME */}

        {/* ALUMNOS */}
        <Route path="/alumnos" exact>
          <Navbar></Navbar>
          <BotonChat />
        </Route>
        {/* ALUMNOS */}

        {/* INSTRUCTOR */}

        <Route path="/instructor" exact>
          <Navbar></Navbar>
        </Route>
        {/* INSTRUCTOR */}

        {/* ADMIN */}
        <Route path="/admin" exact>
          <Navbar></Navbar>
        </Route>
        {/* Dashboard */}
        <Route path="/dashboard" exact>
          <Dashboard></Dashboard>
        </Route>
        {/* alumn */}
        <Route path="/alumn" exact>
          <Alumn></Alumn>
        </Route>
      </Switch>

      <Route path="/registrarse">
        <Registro />
      </Route>

      {/* Invitar Estudiante */}
      <Route path="/invitar">
        <Navbar />
        <Email />
      </Route>
      {/* Invitar Estudiante  */}
    </div>
  );
}

export default App;
