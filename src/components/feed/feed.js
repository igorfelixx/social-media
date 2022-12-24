import React from "react";

import './feedstyle.css'

export default function Feed() {

    return (
        <>
            <div className="Feed">
                <div className="feedDoFeed">
                    <a href="/profile">
                        <div className="Profile"><img className="Profile" src={localStorage.perfil}></img></div>
                    </a>
                    <ul>
                        <li>👥 Amigos</li>
                        <li>⏳ Mais recentes</li>
                        <li>👨‍👨‍👦‍👦 Grupos</li>
                        <li>🛒 Marketplace</li>
                        <li>📺 Watch</li>
                    </ul>
                    <hr />
                </div>
            </div>
        </>
    )

}