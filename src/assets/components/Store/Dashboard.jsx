import { useState } from "react"
import Aside from "../Store/React-components/Aside"
import "./css/Dashboard.css"
export default function Dashboard(){
    const [openSecao, setOpenSecao] = useState(1)

    const paginas = {
        
    }
    return (
        <>
            <main className="Dashboard">
                <Aside openSecao={openSecao} setOpenSecao={setOpenSecao} />
                {paginas[openSecao]}        
            </main>
        </>
    )
}