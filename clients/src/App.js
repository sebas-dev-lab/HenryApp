import React from 'react';
import Home from './Componentes/Home';
import Navbar from './Componentes/Navbar';
import { Route, Switch, Link } from 'react-router-dom';
import Register from './Componentes/registerUser';
import AdminReg from './Componentes/registerAdmin';
import Dashboard from './pages/dashboard';
import Alumn from './Componentes/alumnosTABLE/logic'
import Email from "./Componentes/Email";


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
        </Route>
        {/* Dashboard */}
        <Route path='/dashboard' exact>
          <Dashboard></Dashboard>
        </Route>
        {/* alumn */}
        <Route path='/alumn' exact>
          <Alumn></Alumn>
        </Route>


      </Switch>

      <Route path='/register'
      render={() => <Register/>}
      />
      <Route path='/adminreg'
      render={() => <AdminReg/>}
      />

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
