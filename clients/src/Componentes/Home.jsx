
import React from 'react';
import s from '../styles/home.module.css';
import {AppBar, Toolbar, Typography, Link, FormControl, InputLabel,Select }from '@material-ui/core';
import logo from '../utils/LogoHenry.png'
import home from '../utils/Home3.jpg'


const Home = () => {
  return (
    <div className={s.cont_prin}>
      <AppBar position="static" className={s.menu}>
        <Toolbar variant="dense" className={s.cont_nav}>
          <img src={logo} alt="" />

          <Typography variant="h6" color="inherit" className={s.link}>
            <Link href="/alumnos" color="inherit">
              {" "}
              Alumno{" "}
            </Link>
            <Link href="/instructor" color="inherit">
              {" "}
              Instructor{" "}
            </Link>
            <Link href="/admin" color="inherit">
              {" "}
              Admin{" "}
            </Link>
            <Link href="/login" color="inherit">
              {" "}
              Login{" "}
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
