import React from "react";
import s from "../styles/home.module.css";
import {
  AppBar,
  Toolbar,
  Typography,
  FormControl,
  InputLabel,
  Select,
} from "@material-ui/core";
import logo from "./utils/LogoHenry.png";
import home from "./utils/Home3.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={s.cont_prin}>
      <AppBar position="static" className={s.menu}>
        <Toolbar variant="dense" className={s.cont_nav}>
          <img src={logo} alt="" />

          <Typography variant="h6" color="inherit" className={s.link}>
            <Link
              to="/alumnos"
              style={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              Alumno{" "}
            </Link>
            <Link
              to="/instructor"
              style={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              Instructor{" "}
            </Link>
            <Link
              to="/admin"
              style={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              Admin{" "}
            </Link>
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              Login{" "}
            </Link>
            <Link
              to="/registrarse"
              style={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              Registrarse{" "}
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={s.img}>
        <div className={s.text}>
          <h6>BIENVENIDO</h6>
          <p>
            A tu campus virtual donde podras interactuar con toda la comunidad
            de henry
          </p>
          <div className={s.cont_selec}>
            <InputLabel className={s.label}>Ingresar como:</InputLabel>
            <FormControl className={s.formControl}>
              <Select
                className={s.select}
                native
                inputProps={{
                  name: "age",
                  id: "age-native-simple",
                }}
              >
                {/* <option aria-label="None" value="" /> */}
                <option value={10}>Alumno</option>
                <option value={20}>Instructor</option>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className={s.imgen}>
          <img src={home} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
