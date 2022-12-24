import React, { useCallback, useEffect, useState } from "react";
import { Redirect, Link } from "react-router-dom";

import Postagem from "../../components/postagem/postagem";

import './style.css'

export default function Home() {

    const [file, setFile] = useState()
    const [text, setText] = useState("")

    if (text) localStorage.setItem("textoPost", text)

    const handleFile = (e) => {
        // Selecionando o arquivo
        const file = e.target.files[0];

        // Criando um objeto FileReader
        const reader = new FileReader();

        // Adicionamos um evento para
        // escutar o Reader
        reader.addEventListener(
            "load",
            () => {
                //  Quando carregado,
                // reader.result retornará
                // o objeto convertido em Base64                
                setFile(reader.result)
            });

        // Caso file esteja populado
        // dispara a função.
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    if (file) localStorage.setItem("imagePost", file)

    const isLogout = localStorage.token

    const textAndImage = JSON.parse(localStorage.getItem("textAndImage"))
    
    return (
        <div className="home">

            <div className="form">
                <form action="">
                    <div className="post">
                        <div className="Profile"><img className="Profile" src={localStorage.perfil}></img></div>
                        <input value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder="O que você está pensando?" /><br></br>
                    </div>
                    <hr />
                    <label>
                        <strong>📷</strong> <small>Foto</small>
                        <input value={file ? "" : file} className="arquivo" name="arquivo" onChange={(e) => handleFile(e)} type="file" accept="image/gif, image/jpeg, image/png"></input> <br></br>
                    </label>

                </form>
            </div>

            <Postagem file={file} setFile={setFile} text={text} setText={setText} />

            {isLogout ? "" : <Redirect from="/" to="/login" />} 

        </div>
    )

}