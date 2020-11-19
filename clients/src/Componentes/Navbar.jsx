import React from 'react';
import s from '../styles/navbar.module.css';
import {AppBar, Toolbar, Typography, Avatar }from '@material-ui/core';
import logo from '../Componentes/utils/LogoHenry.png'
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom'




const Navbar = ()=>{
  const {user} = useSelector(store => store.auth.user)
  console.log(user, "**********Nuevo*****")

    return(
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
              <Link to="/"><img src={logo}/></Link>              
              <Typography variant="h6" color="inherit" className={s.link2}>
              <Avatar className={s.avatar}>{user && user.name[0]}</Avatar>
                <Link to="/perfil" color="inherit"> Mi Perfil </Link>
              </Typography>
            </Toolbar>
        </AppBar>
        
      
      </div>
        
    )
}

export default Navbar