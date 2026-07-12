import { useState } from "react"
import { Aside } from "../../../database/Asidesdash"
import "../css/Aside.css"
export default function AsideMenu({ setOpenSecao, openSecao }){

    const [clickLogo, setClickLogo] = useState(false)


    return (
        <aside className={clickLogo ? "Active aside" : "aside"}>
            <i className={clickLogo  ? "ri-store-3-fill"  : "ri-contract-right-line"} onClick={() => setClickLogo(prev => !prev)}></i>
            <div className="cards-aside">
                {Aside.map((event) => (
                    <div className={openSecao === event.id ? "card escolhido" : "card"} key={event.id} onClick={() => setOpenSecao(event.id)}>
                        <i className={ clickLogo  ? event.iconeFechamento : event.icone}></i>
                        <div className="info">
                            <p>{clickLogo && event.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    )
}