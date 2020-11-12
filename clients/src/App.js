import React from 'react';
import './App.css';
import Home from './Componentes/Home';
import Navbar from './Componentes/Navbar';
import { Route, Switch, Link } from 'react-router-dom';
import Login from './Componentes/Login.jsx';
import Login2 from "./Componentes/login/Login2.jsx"
import BotonChat from './Componentes/Chat/BotonChat';

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
        <Route path='/' exact>
          <Home></Home>
        </Route>
        {/* HOME */}

        {/* ALUMNOS */}
        <Route path='/alumnos' exact>
          <Navbar></Navbar>
          <BotonChat />
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
        {/* ADMIN */}
      </Switch>

      <Route path='/login'
        render={() => <Login />}
      />

    </div>





  );
}

export default App;
