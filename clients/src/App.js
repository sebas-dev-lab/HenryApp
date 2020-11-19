import React from "react";
import Home from "./Componentes/Home";
import Navbar from "./Componentes/Navbar";
import { Route, Switch } from "react-router-dom";
import Registro from "./Componentes/registro.jsx";
import Login from "./Componentes/login/Login2.jsx";
// import Dashboard from "./pages/dashboard";
// import Alumnos from "./Componentes/alumnosCRUD/logic";
// import Email from "./Componentes/email/Email";
import BotonChat from "./Componentes/Chat/BotonChat";
import Student from "./Componentes/Student/Student";
import Admin from "./Componentes/Admin/Admin";
import Bienvenida from "./Componentes/Bienvenida";
import Footer from "./Componentes/Footer";
import Perfil from "./Componentes/PerfilUser";
import Calendario from "./Componentes/Student/Calendar"

function App() {
  return (
    <div>
      <Switch>
        {/* login */}
        <Route path="/login" exact>
          <Bienvenida></Bienvenida>
          <Login />
          <Footer></Footer>
        </Route>
        {/* login */}

        {/* HOME */}
        <Route path="/" exact>
          <Home></Home>
        </Route>
        {/* HOME */}

        {/* CALENDARIO */}
        <Route path="/calendario" exact>
          <Calendario/>
        </Route>
        {/* CALENDARIO */}

        {/* ALUMNOS */}
        <Route path="/alumnos" exact>
          <Navbar></Navbar>
          <BotonChat />
          <Student />
        </Route>
        {/* ALUMNOS */}

        {/* INSTRUCTOR */}
        <Route path="/instructor" exact>
          <Navbar></Navbar>
        </Route>
        {/* INSTRUCTOR */}

        {/* ADMIN */}
        <Route exact path="/admin">
          <Navbar></Navbar>
          <Admin />
        </Route>       
        {/* ADMIN */}       

        {/* alumn crud*/}
        
        {/* alumn crud*/}

        {/* REGISTRO */}
        <Route path="/registrarse">
          <Bienvenida></Bienvenida>
          <Registro />
          <Footer></Footer>
        </Route>
        {/* REGISTRO */}        

        {/* PERFIL */}
        <Route path="/perfil">
          <Bienvenida></Bienvenida>
          <Perfil></Perfil>
          <Footer></Footer>
        </Route>
        {/* PERFIL  */}
      </Switch>
    </div>
  );
}

export default App;
