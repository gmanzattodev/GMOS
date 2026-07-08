import "../css/Projetos.css"
import { projetos } from "../../../database/projects"

export default function Projetos(){
    
    
    
    return (
        <>
            <section className="secao-projetos">
                <div className="projetos">
                    {projetos.map((projeto) => (
                        <div className="card" key={projeto.id}>
                            <img src={projeto.img} alt={projeto.name} />
                            <div className="info-card">
                                <h3>{projeto.name}</h3>
                                <p className="status">{projeto.status}</p>
                                <p>{projeto.tecnologias}</p>
                                <button>{projeto.botao}</button>
                            </div>
                        </div>
                    ))}
                </div>

            </section>
        
        </>
    )
}