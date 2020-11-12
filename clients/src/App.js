import React from 'react';
import Home from './Componentes/Home';
import Navbar from './Componentes/Navbar';
import { Route, Switch, Link } from 'react-router-dom';
import Login from './Componentes/Login.jsx';
<<<<<<< HEAD
import Dashboard from './pages/dashboard';
import Alumn from './Componentes/alumnosCRUD/logic'
import Email from "./Componentes/Email";

=======
import BotonChat from './Componentes/Chat/BotonChat';
>>>>>>> chat

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
          <BotonChat />
        </Route>
        {/* ALUMNOS */}

        {/* INSTRUCTOR */}
<<<<<<< HEAD
        <Route path="/instructor" exact>
=======
        <Route path='/instructor' exact>
>>>>>>> chat
          <Navbar></Navbar>
        </Route>
        {/* INSTRUCTOR */}

        {/* ADMIN */}
<<<<<<< HEAD
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
=======
        <Route path='/admin' exact>
          <Navbar></Navbar>

        </Route>
        {/* ADMIN */}
      </Switch>

      <Route path='/login'
        render={() => <Login />}
      />
>>>>>>> chat


      </Switch>

      <Route path="/login">
        <Login />
      </Route>

<<<<<<< HEAD
      {/* Invitar Estudiante */}
      <Route path="/invitar">
        <Navbar />
        <Email />
      </Route>
      {/* Invitar Estudiante  */}
    </div>
=======


>>>>>>> chat
  );
}

export default App;
