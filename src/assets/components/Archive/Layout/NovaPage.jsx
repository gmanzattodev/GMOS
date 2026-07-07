import '../css/NovaPage.css'

export default function NovaPage({ setAbrirPasta, setAbrirArquivo }){
    return (
        <>
            <div className="arquivos">
                <div className="info">
                    <i className="ri-moon-line"></i>
                    <div className="titulo">
                        <h3>Boa Tarde!</h3>
                        <p>Aqui esta um resumo dos seus arquivos;</p>
                    </div>
                </div>
                <div className="cards-arquivos">
                    <div className="nova" onClick={() => setAbrirPasta(true)}>
                        <i className="ri-folder-add-line"></i>
                        <div className="nova-info">
                            <h4>Nova pasta</h4>
                            <p>Organizar arquivos</p>
                        </div>
                    </div>
                    <div className="nova" onClick={() => setAbrirArquivo(true)}>
                        <i className="ri-file-add-line"></i>
                        <div className="nova-info">
                            <h4>Novo arquivo</h4>
                            <p>Criar documento</p>
                        </div>
                    </div>
                    <div className="nova">
                       <i className="ri-upload-2-line"></i>
                        <div className="nova-info">
                            <h4>Update</h4>
                            <p>Enviar arquivos</p>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )
}