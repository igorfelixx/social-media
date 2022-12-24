import React from "react";
import "./navstyle.css"

import Home from '../../front/home/index'

import { Redirect, Link, useHistory } from "react-router-dom";

import Gear from '../../images/gears.png'
import Search from '../../images/search.png'
import Bell from '../../images/bell.png'
import Profile from '../../images/profile.png'
import Question from '../../images/question.png'
import FeedBack from '../../images/feedback.png'
import LogoutImage from '../../images/logout.png'

export default function Nav() {


    const history = useHistory()
    function Logout() {

        localStorage.removeItem("token")

        history.push("/login")

    }

    return (
        <>
            <nav>
                <a href="/">
                    <h1 className="ref">
                        <div className="Logo">

                        </div>
                    </h1>
                </a>
                <div className="searchDaddy">
                    <div className="search">
                        <span><img width="25px" src={Search}></img></span>

                        <input type="text" placeholder="Pesquisar na Rede Social..."></input>
                    </div>
                </div>
                <ul>
                    <li>
                        <a href="/profile">
                            <div className="Profile"> <div className="Profile"><img className="Profile" src={localStorage.perfil}></img></div></div>
                        </a>
                    </li>
                    <li>
                        <div onClick={() => {

                            const modal = document.querySelector(".logout")

                            var teste = Home

                            if (modal.style.display === "none") {
                                modal.style.display = "block";
                                teste.style.opacity = "0";
                            } else {
                                modal.style.display = "none"
                            }

                        }} className="config">
                            <img src={Gear} width="50px" />
                        </div>

                    </li>
                    <li>
                        <a href="">
                            <div className="notification"><img src={Bell} width="35px"></img></div>
                        </a>
                    </li>
                </ul>
            </nav>
            <hr />

            <div className="logout">
                <div className="navLogout">
                    <div className="Profile"> <div className="Profile"><img className="Profile" src={localStorage.perfil}></img></div></div>
                </div>
                <hr />
                <div className="optionsModal">
                    <div >
                        <ul style={{ listStyle: "none", padding: "15px" }}>
                            <li style={{ height: "50px" }}>👥 Amigos</li>
                            <li style={{ height: "50px" }}>⏳ Mais recentes</li>
                            <li style={{ height: "50px" }}>👨‍👨‍👦‍👦 Grupos</li>
                            <li style={{ height: "50px" }}>🛒 Marketplace</li>
                            <li style={{ height: "50px" }}>📺 Watch</li>
                        </ul>
                    </div>
                    <hr />
                    <div>
                        <h3 style={{ display: "flex", alignItems: "center", justifyContent: "center" }}> <img src={Gear} width="25px" /> Settings</h3>
                        <ul style={{ listStyle: "none" }}>
                            <li style={{ height: "50px" }}> <img style={{ marginRight: "5px" }} src={Profile} width="25px" /> <strong>Configuração e Privacidade</strong></li>
                            <li style={{ height: "50px" }}> <img style={{ marginRight: "5px" }} src={Question} width="25px" /><strong>Ajuda e Suporte</strong></li>
                            <li style={{ height: "50px" }}> <img style={{ marginRight: "5px" }} src={FeedBack} width="25px" /> <strong>Dar FeedBack</strong></li>
                        </ul>
                    </div>
                </div>

                <div className="logoutDiv">
                    <button className="logoutButton" onClick={Logout}> <img style={{ marginRight: "5px" }} src={LogoutImage} width="25px" /> Logout</button>
                </div>
            </div>

        </>
    )

}