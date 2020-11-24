import React from "react";
import s from "../styles/navbar.module.css";
import { AppBar, Toolbar, Typography, Avatar } from "@material-ui/core";
import logo from "../Componentes/utils/LogoHenry.png";
import { useSelector, useDispatch } from "react-redux";

import { Link, useHistory } from "react-router-dom";
import { logout } from "../redux/actions/authActions";

const Navbar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.auth);
  console.log(user, "**********Nuevo*****");

  const logoutSession = () => {
    dispatch(logout(history));
  };

  return (
    <div className={s.cont_prin}>
      <AppBar position="static" className={s.menu}>
        <Toolbar variant="dense" className={s.cont_nav}>
          <Typography variant="h6" color="inherit" className={s.link}>
            Hola! {user && user.name}
          </Typography>
        </Toolbar>
      </AppBar>
      <AppBar position="static" className={s.menu2}>
        <Toolbar variant="dense" className={s.cont_nav2}>
          <Link to="/">
            <img src={logo} />
          </Link>
          <Typography variant="h6" color="inherit" className={s.link2}>
            <Avatar className={s.avatar}>{user && user.name[0]}</Avatar>
            {user && user.role === "admin" ? (
              <Link to="/admin/perfil" color="inherit">
                {" "}
                Mi Perfil{" "}
              </Link>
            ) : user.role === "student" ? (
              <Link to="/student/perfil" color="inherit">
                {" "}
                Mi Perfil{" "}
              </Link>
            ) : null}
          </Typography>
          <Typography variant="h6" color="inherit" className={s.link2}>
            {user && <div onClick={logoutSession}>Logout</div>}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
