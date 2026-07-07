import Header from "../components/Config/Header"
import WallpaperSection from "../components/Config/WallpaperSection"
import DockSection from "../components/Config/DockSection"
import Geral from "../components/Config/Geral"
import BottomNav from "../components/Config/BottomNav"
import "./css/Configuracao.css"
import { useState } from "react"


export default function Configuracao({ setOpenApp, setMudarImagem, setMudarDock }){
    const [menu, setMenu] = useState(false)
    return (
        <>
            <section className="settings">
                <Header setMenu={setMenu} setOpenApp={setOpenApp}/>
                <div className="scroll">
                    <WallpaperSection setMudarImagem={setMudarImagem}/>
                    <DockSection setMudarDock={setMudarDock} />
                    <Geral />
                </div>
                <BottomNav menu={menu} setMenu={setMenu} />
            </section>
        
        </>
    )
}