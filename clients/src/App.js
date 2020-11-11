import React from "react";
import "./App.css";
import Home from "./Componentes/Home";
import Navbar from "./Componentes/Navbar";
import Email from "./Componentes/Email";
import { Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        {/* HOME */}
        <Route path="/" exact>
          <Home></Home>
        </Route>
        {/* HOME */}

        {/* ALUMNOS */}
        <Route path="/alumnos" exact>
          <Navbar></Navbar>
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
          <Email></Email>
        </Route>
        {/* ADMIN */}
      </Switch>
    </div>
  );
}

export default App;
