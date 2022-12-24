import React from "react";

import './feedRight.css'

export default function FeedRight() {

    return (
        <>
            <div className="feedRight">
                <div>
                    <a href="/profile">
                        <div className="Profile"><img className="Profile" src={localStorage.perfil}></img></div>
                    </a>
                    <div>
                        <div>
                            <h4>Solicitações de Amizade</h4>
                            <div style={{
                                display: "flex", alignItems: "center"
                            }}
                            >
                                <div className="Profile">👤</div> Jeff Bezos
                            </div>
                            <div><button>Aceitar </button> <button>Negar</button></div> <br />
                            <hr />
                        </div>
                        <div>
                            <h4>Contatos 🔍 </h4>
                            <div className="Contatos">
                                <div style={{ display: 'flex', alignItems: "center" }}>
                                    <div className="Profile">👤</div> Mark Zuckberg
                                </div>
                                <div style={{ display: 'flex', alignItems: "center" }}>
                                    <div className="Profile">👤</div> Elon Musk
                                </div>
                                <div style={{ display: 'flex', alignItems: "center" }}>
                                    <div className="Profile">👤</div> Bill Gates
                                </div>
                                <div style={{ display: 'flex', alignItems: "center" }}>
                                    <div className="Profile">👤</div> Sundar Pichai
                                </div>
                                <div style={{ display: 'flex', alignItems: "center" }}>
                                    <div className="Profile">👤</div> Steve Jobs
                                </div>
                                <div style={{ display: 'flex', alignItems: "center" }}>
                                    <div className="Profile">👤</div> Jack Ma
                                </div>
                                <div style={{ display: 'flex', alignItems: "center" }}>
                                    <div className="Profile">👤</div> Larry Page
                                </div>
                                <div style={{ display: 'flex', alignItems: "center" }}>
                                    <div className="Profile">👤</div> Warren Buffett
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}