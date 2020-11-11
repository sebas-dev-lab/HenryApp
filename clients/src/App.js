import React from 'react';
import Home from './Componentes/Home';
import Navbar from './Componentes/Navbar';
import { Route, Switch, Link } from 'react-router-dom';
import Login from './Componentes/Login.jsx';
import Dashboard from './pages/dashboard';
import Alumn from './Componentes/alumnosCRUD/logic'

function App() {
  return (
    <div>
      <Switch>
        {/* HOME */}
        <Route path='/' exact>
          <Home></Home>
        </Route>
        {/* HOME */}

        {/* ALUMNOS */}
        <Route path='/alumnos' exact>
          <Navbar></Navbar>
        </Route>
        {/* ALUMNOS */}

         {/* INSTRUCTOR */}
         <Route path='/instructor' exact>
          <Navbar></Navbar>
        </Route>
        {/* INSTRUCTOR */}

         {/* ADMIN */}
         <Route path='/admin' exact>
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
        
      <Route path='/login'
      render={() => <Login/>}
      />

    </div>



  
    
  );
}

export default App;
