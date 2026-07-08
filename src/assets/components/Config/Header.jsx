import ImgHeader from '../../img/settingsHeader.png'
import "./css/Header.css"
export default function Header({ setMenu, closeApp, id }){
    return (
        <>
            <header className="Header-settings">
                <div className="section-titulo">
                    <img src={ImgHeader} alt="imagem de secao header settings" />
                    <div className="titulo">
                        <h1>CONFIGURAÇÕES</h1>
                        <p>Personalize sua expêriencia do seu jeito.</p>
                    </div>
                </div>
                <div className="icon">
                    <i className="ri-close-line" onClick={() => closeApp(id)}></i>
                    <i className="ri-menu-line" onClick={() => setMenu(prev => !prev)}></i>
                </div>
            </header>
        </>
    )
}