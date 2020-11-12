import React, { useState } from "react";
import Axios from "axios"
import "./Login2.css"

export default function Login() {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const userchange = (e) => {
        setUser(e.target.value)
    }

    const passchange = (e) => {
        setPass(e.target.value)
    }

    const enviar = (e) => {
        e.preventDefault()
        Axios.post("http://localhost:3000/login", {
            email: user,
            pasword: pass
        }).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err.message)
        })
    }

    return (
        <div className="align">

            <div className="grid">

                <form className="form login">

                    <div className="form__field">
                        <label for="login__username"><span className="hidden">Usuario</span></label>
                        <input onChange={userchange} id="login__username" type="text" name="username" className="form__input" placeholder="Nombre de Usuario" required />
                    </div>

                    <div class="form__field">
                        <label for="login__password"><span className="hidden">Contraseña</span></label>
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