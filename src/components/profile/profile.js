import React, { useState } from "react";

import PersonalFeed from "../personalFeed/personalFeed";
import Postagem from '../postagem/postagem'

import './styleprofile.css'

export default function Profile() {

    const [capa, setCapa] = useState()

    const handleCapa = (e) => {
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
                setCapa(reader.result)
            });

        // Caso file esteja populado
        // dispara a função.
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    if(capa) localStorage.setItem("capa", capa)

    const bannerCapa = localStorage.capa
    
    const [newPicture, setNewPicture] = useState();

    const handleProfile = (e) => {
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
                setNewPicture(reader.result)
            });

        // Caso file esteja populado
        // dispara a função.
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    if(newPicture) localStorage.setItem("perfil", newPicture)
    
    const perfil = localStorage.perfil

    return (
        <>
            <div className="mainProfile">
                <div >
                    <div className="capa2">
                        {bannerCapa ? <img className="bannerCapa" src={bannerCapa} /> : ""}
                        <label className="toggleCapa">
                            <strong>📷</strong> <small>Editar foto Capa</small>
                            <input className="arquivo" name="arquivo" onChange={(e) => handleCapa(e)} type="file" accept="image/gif, image/jpeg, image/png"></input> <br></br>
                        </label>
                    </div>

                    <div>
                        <button>
                            <div className="ProfileCapa">
                                <label className="toggleFoto">
                                    <strong><big>📷</big></strong>
                                    <input
                                        type="file"
                                        name="profile"
                                        accept="image/*"
                                        onChange={(e) => handleProfile(e)}
                                    />
                                </label>
                                {perfil ? <img className="fotoPerfil" src={perfil} /> : ""}
                            </div>
                        </button>



                    </div>
                    <PersonalFeed />
                </div>
            </div>
        </>
    )

}