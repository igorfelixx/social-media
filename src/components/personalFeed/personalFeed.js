import React, { useState } from "react";

import './personalFeed.css'

import More from '../../images/more.png'

export default function PersonalFeed() {

    const [listaFeed, setListaFeed] = useState([])

    const textoPost = localStorage.getItem("textoPost")

    const imagePost = localStorage.getItem("imagePost")

    const textAndImage = JSON.parse(localStorage.getItem("textAndImage"))

    function ver() {
        setListaFeed([
            textAndImage ?
                <div className="ola">
                    <div className="cardHeader">
                        <div className="Profile"><img className="Profile" src={localStorage.perfil}></img></div>
                        <p>{textAndImage.text}</p>
                        <div style={{ cursor: "pointer" }} onClick={() => {

                            const visible = document.querySelector(".settingsVisible")
                            if (visible.style.display === "flex") {
                                visible.style.display = "none";
                            } else {
                                visible.style.display = "flex"
                            }

                        }} className="settings">
                            <img src={More} width="20px" />
                            <div  className="settingsVisible text-shadow-pop-right">
                                <p onClick={() => {
                                    const remover = document.querySelector(".postagem")

                                    remover.remove()
                                }}>Remover</p>
                            </div>
                        </div>
                    </div>
                    <img className="image" src={textAndImage.file} alt="asljkdhj" />
                </div> :
                textoPost ?
                    <div className="ola">
                        <div className="cardHeader">
                            <div className="Profile"><img className="Profile" src={localStorage.perfil}></img></div>
                            <p>{textoPost}</p>
                            <div style={{ cursor: "pointer" }} onClick={() => {

                                const visible = document.querySelector(".settingsVisible")
                                if (visible.style.display === "flex") {
                                    visible.style.display = "none";
                                } else {
                                    visible.style.display = "flex"
                                }

                            }} className="settings">
                                <img src={More} width="20px" />
                                <div className="settingsVisible">
                                    <p onClick={() => {
                                        const remover = document.querySelector(".postagem")

                                        remover.remove()
                                    }}>Remover</p>
                                </div>
                            </div>
                        </div>
                    </div> :
                    imagePost ?
                        <div className="ola">
                            <div className="cardHeader">
                                <div className="Profile"><img className="Profile" src={localStorage.perfil}></img></div>
                                <div style={{ cursor: "pointer" }} onClick={() => {

                                    const visible = document.querySelector(".settingsVisible")
                                    if (visible.style.display === "flex") {
                                        visible.style.display = "none";
                                    } else {
                                        visible.style.display = "flex"
                                    }

                                }} className="settings">
                                    <img src={More} width="20px" />
                                    <div className="settingsVisible">
                                        <p onClick={() => {
                                            const remover = document.querySelector(".postagem")

                                            remover.remove()
                                        }}>Remover</p>
                                    </div>
                                </div>
                            </div>
                            <img className="image" src={imagePost} alt="asljkdhj" />
                        </div> :
                        alert("Preencha os campos"),
            ...listaFeed
        ])
    }

    return (
        <>
            <div className="personalFeed">
                <div>
                    <h2>Suas Publicações</h2>
                    <button onClick={ver}>Ver</button>
                    <hr style={{ marginBottom: "15px" }} />
                    {listaFeed.map((item, index) =>
                        <div className="postagem" key={index}>{item ? item : !item}</div>
                    )}
                    {/* {textoPost ? <div className="postagem" >
                        <div className="ola">
                            <div className="cardHeader">
                                <div className="Profile"><img className="Profile" src={localStorage.perfil}></img></div>
                                <p>{textoPost}</p>
                            </div>
                        </div>
                    </div>
                        : ""}
                    {imagePost ? <div className="postagem" >
                        <div className="ola">
                            <div className="cardHeader">
                                <div className="Profile"><img className="Profile" src={localStorage.perfil}></img></div>
                            </div>
                            <img className="image" src={imagePost} alt="asljkdhj" />
                        </div>
                    </div> : ""}
                    {textAndImage ? <div className="postagem" >
                        <div className="ola">
                            <div className="cardHeader">
                                <div className="Profile"><img className="Profile" src={localStorage.perfil}></img></div>
                                <p>{textAndImage.text}</p>
                            </div>
                            <img className="image" src={textAndImage.file} alt="asljkdhj" />
                        </div>
                    </div> : ""} */}
                </div>
            </div>
        </>
    )

}