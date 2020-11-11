import React, { useState } from 'react';
import { useEffect } from 'react';
import Navbar from './Navbar'
import  '../styles/Login.css';

export default function Registro() {
    const [data, setData] = useState({
        name: "",
        lastName: "",
        email: "",
        password: "",
        check: false
    })

    const [errors, setErrors] = useState({
        emailError: "",
        passwordError: "",
        nameError:"",
        lastnameError: ""
    })

    const inputsChange_name = (e) => {
        if(/[$%&|{}.,()+-<>#]/.test(data.name)) {
            setErrors({
                ...errors,
                nameError: "no se aceptan caracteres especiales"
            })
        } else {
            setErrors({
                ...errors,
                nameError: ""
            })
        }
        setData({
            ...data,
            name: e.target.value
        })
    }

    const inputsChange_lastName = (e) => {
        if(/[$%&|{}.,()+-<>#]/.test(data.lastName)) {
            setErrors({
                ...errors,
                lastnameError: "no se aceptan caracteres especiales"
            })
        } else {
            setErrors({
                ...errors,
                lastnameError: ""
            })
        }
        setData({
            ...data,
            lastName: e.target.value
        })
    }


    const inputsChange_email = (e) => {
        if (!/\S+@\S+\.\S+/.test(data.email)) {
            setErrors({
                ...errors,
                emailError: "El email ingresado no es valido",

            })
        } else {
            setErrors({
                ...errors,
                emailError: "",
            })
        }
        setData({
            ...data,
            email: e.target.value
        })
    }

    const inputsChange_password = (e) => {
        if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(data.password)) {
            setErrors({
                ...errors,
                passwordError: "Debe tener al menos 6 caracteres, una mayuscula, una minuscula y un numero",
            })
        } else {
            setErrors({
                ...errors,
                passwordError: ""
            })
        }
        setData({
            ...data,
            password: e.target.value
        })
    }

    useEffect(() => {
        if (data.name.length > 3 && data.lastName.length > 3 && data.check === true && data.email.length > 1 && !errors.emailError && data.password.length > 1 && !errors.passwordError && !errors.lastnameError && !errors.nameError) {
            setErrors({
                ...errors,
                errores: false
            })
        } else {
            setErrors({
                ...errors,
                errores: true
            })
        }
    }, [data.name, data.lastName, data.email, data.password, data.check, errors.emailError, errors.passwordError, errors.nameError,errors.lastnameError])

    const check = (e) => {
        if (e.target.checked === true) {
            setData({
                ...data,
                check: true
            })
        } else {
            setData({
                ...data,
                check: false
            })
        }
    }

    return (
        
        <div className="Login">
            <div className="container">
            <form className= "sing_in" >
                <div class="form-group">
                    <label >Name</label>
                    <input name="name" onChange={inputsChange_name} type="text" class="form-control" style={{ color: "black", width: "450px" }} placeholder="ingresar nombre" />
                    <small className="detail">{errors.nameError}</small>
                </div>
                <div class="form-group">
                    <label >Lastname</label>
                    <input name="lastName" onChange={inputsChange_lastName} type="text" class="form-control" style={{ color: "black", width: "450px" }} placeholder="ingresa apellido" />
                    <small className="detail">{errors.lastnameError}</small>               
                </div>
                <div class="form-group">
                    <label >Email address</label>
                    <input name="email" onChange={inputsChange_email} type="email" class="form-control" style={{ color: "black", width: "450px" }} aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" class="detail" >{errors.emailError}</small>
                </div>
                <div class="form-group">
                    <label >Password</label>
                    <input name="password" onChange={inputsChange_password} type="password" class="form-control" style={{ color: "black", width: "450px" }} placeholder="Password" />
                    <small className="detail">{errors.passwordError}</small>
                </div>
                <button disabled={errors.errores} requiered type="submit" class="submit">Registrar</button>

            </form>
        </div>
        </div>
    )
}