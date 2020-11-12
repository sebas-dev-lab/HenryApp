import React from 'react';
import Home from './Componentes/Home';
import Navbar from './Componentes/Navbar';
import { Route, Switch, Link } from 'react-router-dom';
import Login from './Componentes/Login.jsx';
import Dashboard from './pages/dashboard';
import Alumn from './Componentes/alumnosCRUD/logic'
import Email from "./Componentes/Email";
import Bienvenida from './Componentes/Bienvenida';
import Footer from './Componentes/Footer';
import Perfil from './Componentes/PerfilUser'; 


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

        {/* ADMIN  */}
        <Route path='/admin' exact>
          <Dashboard></Dashboard>
        </Route>
        {/* ADMIN  */}

        {/* alumn */}
        <Route path='/alumn' exact>
          <Alumn></Alumn>
        </Route>
        {/* alumn */}

       {/* LOGIN */}
        <Route  path='/login' exact>
          <Bienvenida></Bienvenida>
          <Login></Login>
          <Footer></Footer>
        </Route>
        {/* LOGIN */}

        {/* PERFIL */}
        <Route  path='/perfil' exact>
          <Bienvenida></Bienvenida>
          <Perfil></Perfil>
          <Footer></Footer>
        </Route>
        {/* PERFIL */}

        {/* REGISTRO */}
         {/* <Route  path='/registro' exact>
          <Bienvenida></Bienvenida>
          ******************** Componente de formulario de registro *******************
          <Footer></Footer>
        </Route> */}
        {/* REGISTRO */}

        {/* Invitar Estudiante */}
        <Route path="/invitar">
            <Navbar />
            <Email />
          </Route>
      {/* Invitar Estudiante  */}

      </Switch>


    </div>
  );
}

export default App;
