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
import Calendario from "./Componentes/Student/Calendar";
import Calenadmin from "./Componentes/Calenadmin/calendarioadmin";
import Modulo from "./Componentes/modulo/Modulo";
import CrudModulo from "./Componentes/modulo/CrudModulo";
import NewModule from "./Componentes/modulo/NewModule";
import GrupoPP from "./Componentes/Admin/pairPrograming/logic"
import Grupos from "./Componentes/Admin/gruposCRUD/logic"



import Pair from "./Componentes/pairprogramming/Pair";
import ProtectedStudentRoute from "./Componentes/ProtectedRoutes/ProtectedStudentsRoutes";
import ProtectedAdminRoute from "./Componentes/ProtectedRoutes/ProtectedAdminRoutes";
import ProtectedInstructorRoute from "./Componentes/ProtectedRoutes/ProtectedInstructorRoute";

function App() {
  return (
    <div>
      <Switch>
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

        <Route path="/test">
          <Grupos/>
        </Route>
        


        <Route path="/test2/:grupo">
          <GrupoPP/>
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;
