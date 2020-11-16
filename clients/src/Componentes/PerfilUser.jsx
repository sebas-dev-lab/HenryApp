import React from 'react';
import s from '../styles/perfilUser.module.css';
import {Typography, Breadcrumbs, Link, TextField } from '@material-ui/core';



const Perfil = ()=>{
    return(
        <di>
        <Breadcrumbs aria-label="breadcrumb" className={s.miga}>
            <Link color="inherit" href="/alumnos" >
                Alumno
            </Link>
            <Link color="inherit" href="/perfil" >
                Perfil
            </Link>
        </Breadcrumbs>
        <div className={s.cont_print}>
            <div className={s.cont_info}>
             <div className={s.info}>
                 <div className={s.form}>
                 <h1>Datos Personales</h1>
                <TextField
                id="standard-full-width"
                label="Nombre"
                style={{ margin: 8, width: 170 }}
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                />
                <TextField
                id="standard-full-width"
                label="Apellido"
                style={{ margin: 8, width: 170 }}
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                />
                <TextField
                id="standard-full-width"
                label="DIN"
                style={{ margin: 8, width: 170 }}
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                />
                <TextField
                id="standard-full-width"
                label="Ciudad"
                style={{ margin: 8, width: 170 }}
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                />
                </div>
                <div className={s.form}>
                 <h1>Cuentas Asociadas</h1>
                <TextField
                id="standard-full-width"
                label="Cuenta Google"
                style={{ margin: 8, width: 170 }}
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                />
                <TextField
                id="standard-full-width"
                label="Cuenta GitHub"
                style={{ margin: 8, width: 170 }}
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                />
            
                </div>
                <div className={s.form}>
                 <h1>Henry</h1>
                <TextField
                id="standard-full-width"
                label="Cohorte"
                style={{ margin: 8, width: 170 }}
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                />
                <TextField
                id="standard-full-width"
                label="Instructor"
                style={{ margin: 8, width: 170 }}
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                />
                <TextField
                id="standard-full-width"
                label="Equipo PP"
                style={{ margin: 8, width: 170 }}
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                />
                <TextField
                id="standard-full-width"
                label="Nombre de mi PM"
                style={{ margin: 8, width: 170 }}
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                />
                </div>
             </div>
             
            </div>
            
        </div>
        </di>
        
    )
}

export default Perfil