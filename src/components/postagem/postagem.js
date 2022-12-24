import React, { useState } from "react";
import './style.css'

import More from '../../images/more.png'

export default function Postagem({ file, setFile, text, setText }) {

    const [post, setPost] = useState([])

    const imagePost = localStorage.getItem("imagePost")

    function enviar() {

        setPost([
            text && file ?
                <div className="ola">
                    <div className="cardHeader">
                        <div className="Profile"><img className="Profile" src={localStorage.perfil}></img></div>
                        <p>{text}</p>
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

                                    const visible = document.querySelector(".settingsVisible")
                                    visible.style.display = "none";
                                }}>Remover</p>
                            </div>
                        </div>
                    </div>
                    <img className="image" src={file} alt="asljkdhj" />
                </div> :
                text ?
                    <div className="ola">
                        <div className="cardHeader">
                            <div className="Profile"><img className="Profile" src={localStorage.perfil}></img></div>
                            <p>{text}</p>
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
                    file ?
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

                                            const visible = document.querySelector(".settingsVisible")
                                            visible.style.display = "none";
                                        }}>Remover</p>
                                    </div>
                                </div>
                            </div>
                            <img className="image" src={file} alt="asljkdhj" />
                        </div> :
                        alert("Preencha os campos"),
            ...post
        ])

        setFile("")
        setText("")

        const obj = {
            text: text,
            file: file
        }

        if (text && file) localStorage.setItem("textAndImage", JSON.stringify(obj))

    }

    if (post) localStorage.setItem("posts", JSON.stringify(post))

    return (

        <div className="feed">
            <button onClick={enviar}>Enviar</button>
            {post.map((item, index) =>
                <div className="postagem">{item}</div>
            )}
        </div>

    )

}