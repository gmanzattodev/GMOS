import '../css/Error.css'
import Carros from './Carros'

export default function Error({ internet }){
    return (
        <>  
            <section className="Erro-internet">
                <div className="centro-erro">
                    <h1>Sem internet</h1>
                    <p className='subtitulo'>O GM OS não está conectado á internet.</p>

                    <p className='tente'>Tente:</p>
                    <ul>
                        <li>Clique no ícone de Wi-Fi na barra do GM OS e conecte-se a uma rede</li>
                        <li>Verifique se esta ligado o Wi-fi do GM OS</li>
                        <li>Reinicie o GM OS e tente novamente</li>
                    </ul>
                    <p className='err'>ERR_GM_OS_INTERNET_DISCONNECTED</p>
                </div>

            </section>
        </>
    )
}