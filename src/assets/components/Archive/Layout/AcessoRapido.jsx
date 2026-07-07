import '../css/AcessoRapido.css'
export default function AcessoRapido({ pastas, favoritos, maximized }){
    return (
        <>
            <section className="acessoRapido">
                <h2>Acesso Rápido</h2>
                <div className="cards-rapido">
                    {pastas.map((paste) => (
                        <div className="card-acesso" key={paste.id}>
                            <i className={paste.icon} style={{ color: paste.cor}}></i>
                            <h2>{paste.paragrafo}</h2>
                            <p>{paste.item} itens</p>
                        </div>
                    ))}

                    {maximized ? (favoritos.map((paste) => (
                        <div className="card-acesso" key={paste.id}>
                            <i className={paste.icon} style={{ color: paste.cor}}></i>
                            <h2>{paste.paragrafo}</h2>
                            <p>{paste.item} itens</p>
                        </div>
                    ))) : null}

                </div>
            </section>  
        </>
    )
}