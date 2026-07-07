import "../css/Favoritos.css"

export default function Favoritos({ arrayFavorito, removerFavorito }){
    
    
    
    return (
        <>
            <section className="favorito">
                <h2>Favoritos</h2>
                <p>Aqui ficam as pastas ou arquivos favoritos.</p>
                <div className="fav">
                    <div className="pasta-favorito">
                        <div className="titulo">
                            <h3>Pastas - Favoritos</h3>
                        </div>
                        <div className="pasta-list">
                            {arrayFavorito.filter((item) => item.tipo === "pasta").map((item) => (
                                <div key={item.id} className="novos-fav">
                                    <i className={item.icon}></i>
                                    <p>{item.nome}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="arquivos-favoritos">
                        <div className="titulo">
                            <h3>Arquivos - Favoritos</h3>
                        </div>
                        <div className="arquivo-list">
                            {arrayFavorito.filter((item) => item.tipo === "arquivo").map((item) => (
                                <div key={item.id} className="novos-fav" onClick={() => removerFavorito(item.id)}>
                                    <i className={item.icon}></i>
                                    <p>{item.nome}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        
        </>
    )
}