import { useState } from 'react'
import '../css/Topbar.css'
export default function Topbar({ closeApp, id, setMaximized, maximized }){
    
    
    
    return (
        <>
            <header className="TopBar">
                <div className="topsbar">
                    <div className="titulo">
                        <i className="ri-folder-line"></i>
                        <p>Arquivos</p>
                    </div>
                    <div className="fechamento">
                        <button><i className="ri-subtract-line" onClick={() => setOpenApp((prev) => prev.filter(app => app !== "Gerenciador"))}></i></button>
                        <button onClick={() => setMaximized(!maximized)}><i className={maximized ? "ri-checkbox-multiple-blank-line" : "ri-square-line"}></i></button>
                        <button className='close' onClick={() => closeApp(id)}><i className="ri-close-line"></i></button>
                    </div>
                </div>
                <div className="barra">
                    <div className="icon">
                        <i className="ri-arrow-left-line"></i>
                        <i className="ri-arrow-right-line"></i>
                        <i className="ri-home-4-line"></i>
                    </div>
                    <div className="input-search">
                        <i className="ri-search-line"></i>
                        <input type="text" placeholder="Buscar..." />
                    </div>
                </div>
            </header>
        
        </>
    )
}