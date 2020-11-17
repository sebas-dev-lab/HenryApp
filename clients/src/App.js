import React, { useEffect } from "react";
import Home from "./Componentes/Home";
import { Route, Switch } from "react-router-dom";
import Registro from "./Componentes/registro.jsx";
import Login from "./Componentes/login/Login2.jsx";
// import Dashboard from "./pages/dashboard";
// import Alumnos from "./Componentes/alumnosCRUD/logic";
// import Email from "./Componentes/email/Email";
import Student from "./Componentes/Student/Student";
import Admin from "./Componentes/Admin/Admin";
import Perfil from "./Componentes/PerfilUser";

import Calendario from "./Componentes/Student/Calendar"

import Calendario from "./Componentes/Student/Calendar";
import Calenadmin from "./Componentes/Calenadmin/calendarioadmin";
import Modulo from "./Componentes/modulo/Modulo";
import CrudModulo from "./Componentes/modulo/CrudModulo";
import NewModule from "./Componentes/modulo/NewModule";
import Pair from "./Componentes/pairprogramming/Pair";
import ProtectedStudentRoute from "./Componentes/ProtectedRoutes/ProtectedStudentsRoutes";
import ProtectedAdminRoute from "./Componentes/ProtectedRoutes/ProtectedAdminRoutes";
import ProtectedInstructorRoute from "./Componentes/ProtectedRoutes/ProtectedInstructorRoute";


function App() {
  return (
    <div>
      <Switch>
<<<<<<< HEAD
        {/*===================== Unprotected Routes ===================== */}
        {/*========  Home route======== */}
        <Route exact path="/" component={Home} />
        {/*======== Auth Routes ========*/}
        <Route exact path="/login" component={Login} />
        <Route path="/registrarse" component={Registro} />
        {/*====================== Protected Routes ===================== */}
        {/*======== Student Routes ======== */}
        <ProtectedStudentRoute exact path="/alumnos" component={Student} />
        <ProtectedStudentRoute path="/student/perfil" component={Perfil} />
        <ProtectedStudentRoute
          exact
          path="/calendario"
          component={Calendario}
        />
        <ProtectedStudentRoute exact path="/clases" component={Modulo} />
        {/*========= Instructor Routes ======== */}
        {/*TODO falta componente instructor*/}
        <ProtectedInstructorRoute path="/instructor" exact />{" "}
        <ProtectedInstructorRoute exact path="/modulo" component={NewModule} />
        <ProtectedInstructorRoute
          path="/instructor/perfil"
          component={Perfil}
        />
        {/*========== Admin Routes ========= */}
        <ProtectedAdminRoute exact path="/admin" component={Admin} />
        <ProtectedAdminRoute path="/calendarioadmin" component={Calenadmin} />
        <ProtectedAdminRoute path="/admin/perfil" component={Perfil} />
=======
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


          <Calendario />
        </Route>
        {/* CALENDARIO */}

        {/* Calendario Admin */}
        <Route path="/calendarioadmin">
          <Calenadmin />
        </Route>
        {/* Calendario Admin  */}


        {/* ALUMNOS */}
        <Route path="/alumnos" exact>
          <Navbar></Navbar>
          <BotonChat />
          <Student />
        </Route>
        {/* ALUMNOS */}
        {/* Clases */}
        <Route path="/clases" exact>
          <Navbar></Navbar>
          <Modulo />
          <Footer></Footer>
        </Route>
        {/* Clases */}
        {/* INSTRUCTOR */}
        <Route path="/instructor" exact>
          <Navbar></Navbar>
        </Route>
        {/* INSTRUCTOR */}
        {/* MODULO */}
        <Route path="/modulo" exact>
          <Navbar></Navbar>
          <NewModule />
          <Footer></Footer>
        </Route>
        {/* MODULO */}

        {/* ADMIN */}
        <Route exact path="/admin">
          <Navbar></Navbar>
          <Admin />
        </Route>
        {/* ADMIN */}

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
>>>>>>> 7aaecc010aa5a8c96db4f8ae98ffd0a49704b68e
      </Switch>
    </div>
  );
}

export default App;
