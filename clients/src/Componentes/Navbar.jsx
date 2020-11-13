import React from 'react';
import s from '../styles/navbar.module.css';
import {AppBar, Toolbar, Typography, Link, Avatar }from '@material-ui/core';
import logo from '../Componentes/utils/LogoHenry.png'




const Navbar = ()=>{
    return(
      <div className={s.cont_prin}>        
        <AppBar position="static" className={s.menu}>            
            <Toolbar variant="dense" className={s.cont_nav}>
              <Typography variant="h6" color="inherit" className={s.link}>
                Hola! Toni Tralice
              </Typography>
            </Toolbar>
        </AppBar>
        <AppBar position="static" className={s.menu2}>            
            <Toolbar variant="dense" className={s.cont_nav2}>
              <Link href="/"><img src={logo}/></Link>              
              <Typography variant="h6" color="inherit" className={s.link2}>
                <Avatar className={s.avatar}>N</Avatar>
                <Link href="/perfil" color="inherit"> Mi Perfil </Link>
              </Typography>
            </Toolbar>
        </AppBar>
        
      
      </div>
        
    )
}

export default Navbar