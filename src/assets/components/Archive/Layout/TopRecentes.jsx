import "../css/TopRecentes.css"

export default function TopRecentes({ setHistory }){
    return (
        <>
            <div className="TopRecentes">
                <div className="bar">
                    <i className="ri-time-line"></i>
                    <div className="titulo-top">
                        <h3>Recentes</h3>
                        <p>Arquivos que você acessou recentemente</p>
                    </div>
                </div>


                <div className="Historio-limpo">
                    <button onClick={() => setHistory([])}><i className="ri-delete-bin-5-line"></i></button>
                </div>
            </div>
        
        </>
    )
}