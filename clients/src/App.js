import React from 'react';
import Home from './Componentes/Home';
import Navbar from './Componentes/Navbar';
import { Route, Switch, Link } from 'react-router-dom';
import Login from './Componentes/Login.jsx';
import Login2 from "./Componentes/login/Login2.jsx"
import Dashboard from './pages/dashboard';
import Alumn from './Componentes/alumnosCRUD/logic'
import Email from "./Componentes/Email";
import BotonChat from './Componentes/Chat/BotonChat';
import adminReducers from './redux/reducers/adminReducers';
import studentReducers from './redux/reducers/studentReducers';
import Student from './Componentes/Student/Student'
import Admin from './Componentes/Admin/Admin'
import logic from './Componentes/alumnosCRUD/logic'
// import logic2 from './Componentes/cohorteCRUD/logic2'
import logic3 from './Componentes/cardUsuario/logic3'
import form from './Componentes/cardFunciones/form'
import Carrusel from './Componentes/Carrusel'




function App() {
  return (
    <div>
      <Switch>
        {/* login2 */}
        <Route path='/login2' exact>
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
        
          <Student />    
       
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
          <Admin />
     
        </Route>

        {/* <Route path='/student/all' exact>
            {logic}
            {/* {logic3} */}
        {/* </Route> */}

        <Route path='/cohort/all' exact>

          {Dashboard}

        </Route>
        

        {/* Dashboard */}
        {/* <Route path='/dashboard' exact>
          <Dashboard></Dashboard>
        </Route>
        alumn */}
        <Route path='/alumn' exact>
          <Alumn></Alumn>
        </Route>
        
        


      </Switch>

      <Route path="/login">
        <Login />
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