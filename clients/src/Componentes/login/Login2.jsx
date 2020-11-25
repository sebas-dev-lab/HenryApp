import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import "./Login2.css";
import { authLogin } from '../../redux/actions/authActions';
import { useHistory } from  'react-router-dom';
import {Mail, Lock } from "@material-ui/icons";


export default function Login() { 

    const userLogin = useSelector(store => store.auth.user.user)
    console.log(userLogin, "*********************************")

    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const userchange = (e) => {
        setUser(e.target.value)
    }

    const passchange = (e) => {
        setPass(e.target.value)
    }

    const enviar = async (e) => {
        e.preventDefault()
        await dispatch(authLogin(user, pass))
         
    }

    useEffect(()=>{
        if(userLogin && userLogin.role === 'admin'){
            history.push('/admin') 
        }
        if(userLogin && userLogin.role === 'student'){
            history.push('/alumnos') 
        }
    }, [userLogin])

    return (
        <div className="align">

            <div className="grid">

                <form className="form login">

                    <div className="form__field">
                        <label for="login__username" className="cont_label"><Mail/></label>
                        <input onChange={userchange} id="login__username" type="text" name="username" className="form__input" placeholder="Correo" required />
                    </div>

                    <div class="form__field">
                        <label for="login__password" className="cont_label"><Lock/></label>
                        <input onChange={passchange} id="login__password" type="password" name="password" className="form__input" placeholder="Contraseña" required />
                    </div>

                    <div className="form__field" onClick={enviar}>
                        <input type="submit" value="Ingresar" />
                    </div>
                </form>
            </div>
        </div>
    )
}