import { useState } from "react"
import { Aside } from "../../../database/Asidesdash"

export default function AsideMenu(){

    const [clickLogo, setClickLogo] = useState(false)


    return (
        <aside className={clickLogo ? "Active aside" : "aside"}>
            <i className={clickLogo  ? "ri-store-3-fill"  : "ri-contract-right-line"} onClick={() => setClickLogo(prev => !prev)}></i>

            <div className="cards-aside">
                {Aside.map((event) => (
                    <div className="card" key={event.id}>
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