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
import { useSelector, useDispatch } from "react-redux";
import { verifySession } from "./redux/actions/authActions";

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.auth);
  console.log(user, "**********app*****");
  useEffect(() => {
    dispatch(verifySession());
  }, []);

  let userLogin = null;
  if (user) {
    userLogin = user;
  }

  return (
    <div>
      <Switch>
        {/*===================== Unprotected Routes ===================== */}
        {/*======== Auth Routes ========*/}
        <Route exact path="/login" component={Login} />
        <Route path="/registrarse" component={Registro} />
        {/*====================== Protected Routes ===================== */}
        {/*======== Perfil Route (admin/instructor/student) ==========*/}
        <Route path="/perfil" component={Perfil} />
        {/*========  Home route======== */}
        <Route exact path="/" component={Home} />
        {/*======== Student Routes ======== */}
        <Route exact path="/alumnos" component={Student} />
        <Route exact path="/calendario" component={Calendario} />
        <Route exact path="/clases" component={Modulo} />
        {/*========= Instructor Routes ======== */}
        {/*TODO falta componente instructor*/}
        <Route path="/instructor" exact />{" "}
        <Route exact path="/modulo" component={NewModule} />
        {/*========== Admin Routes ========= */}
        <Route exact path="/admin" component={Admin} />
        <Route path="/calendarioadmin" component={Calenadmin} />
      </Switch>
    </div>
  );
}

export default App;
