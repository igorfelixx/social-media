import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import './login.css'

export default function Login() {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const [isLogged, setIsLogged] = useState()

    const user = JSON.parse(localStorage.getItem("usuario"))

    const token = localStorage.getItem("token")

    function localStorage2() {

        if (email === user.email, senha === user.senha) {
            const isLogged = JSON.parse(localStorage.getItem("usuario"))
            setIsLogged(isLogged)
            localStorage.setItem("token", "123123")
        } else {
            alert("Email não cadastrado")
        }

        setEmail("")
        setSenha("")

    }
    
    return (
        <div className="mainLogin">
            <div className="borderLogin">
                <div className="Login">
                    <div style={{ display: "flex", flexDirection: "column", marginTop: "35px", alignItems: "center" }}>
                        <div className="Logo">
                        </div>
                        <h1>Login</h1>
                    </div>
                    <form className="formLogin" onSubmit={localStorage2}>
                        <input className="loginInput" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email"></input>     <br />
                        <input className="loginInput" value={senha} onChange={(e) => setSenha(e.target.value)} type="password" placeholder="Senha"></input>     <br />
                        <button onClick={localStorage2}>Enviar</button>
                        {token ? <Redirect exact from="/login" to="/" /> : ""}
                        <strong>
                            <span>
                                <a href="/cadastro">Criar um Conta</a>
                            </span>
                        </strong>
                    </form>
                </div>
            </div>
        </div>
    )

}