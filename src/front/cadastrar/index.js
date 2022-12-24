import React, { useState } from "react";
import { Redirect, useHistory } from 'react-router-dom'

export default function Cadastrar() {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [confsenha, setConfsenha] = useState()

    var usuario = {
        email: email,
        senha: senha
    }

    const token = localStorage.getItem("token")

    const history = useHistory()

    function cadastrar() {

        if(email !== "", senha === confsenha){
            localStorage.setItem("usuario", JSON.stringify(usuario))
            history.push("/login")
        } else {
            alert("E-mail ou senha inválidos")
        }

    }

    return (
        <>
            <div className="mainLogin">
                <div className="borderLogin">
                    <div className="Login">
                        <div style={{ display: "flex", flexDirection: "column", marginTop: "35px", alignItems: "center" }}>
                            <div className="Logo">
                            </div>
                            <h1>Cadastro</h1>
                        </div>
                        <form className="formLogin" onSubmit={cadastrar}>
                            <input className="loginInput" value={email} type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}></input> <br />
                            <input className="loginInput" value={senha} type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)}></input> <br />
                            <input className="loginInput" value={confsenha} type="password" placeholder="Confirme sua senha" onChange={(e) => setConfsenha(e.target.value)}></input>  <br />
                            <button onClick={cadastrar}>Cadastrar</button>
                            {token ? <Redirect exact from="/cadastro" to="/" /> : ""}
                            <strong>
                                <span>
                                    <a href="/login">Já tem uma Conta</a>
                                </span>
                            </strong>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )

}