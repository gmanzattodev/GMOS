import "./css/BottomNav.css"

export default function BottomNav({ menu, setMenu }){
    const secoes = [
        {
            id: 1,
            icone: "ri-home-4-line",
            descricao: "INICIO"
        },
        {
            id: 2,
            icone: "ri-settings-3-line",
            descricao: "PERSONALIZAÇÃO"
        }
    ]
    
    return (
        <>
            {menu ? <div className="NavBar">
                    {secoes.map((secao) => (
                        <div className="icons" key={secao.id} onClick={() => setMenu(false)}>
                            <i className={secao.icone}></i>
                            <p>{secao.descricao}</p>
                        </div>
                    ))}
                </div>
                 : null}
        </>
    )
}