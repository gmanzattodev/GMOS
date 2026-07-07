import { icons } from './WallPeper'

import './css/WallpaperSection.css'
export default function DockSection({ setMudarDock }){
    return (
        <>
            <section className="Dock-settings">
                <div className="info-dock">
                    <i className="ri-emoji-sticker-line"></i>
                    <div className="titulo">
                        <h3>ICONE DO DOCK</h3>
                        <p>Escolha o icone que sera exibido no dock.</p>
                    </div>
                </div>
                <div className="dock-galeria">
                    {icons.map((icon) => (
                        <div className="icones" key={icon.id} onClick={() => setMudarDock(icon.id)}>
                            <img src={icon.img} alt={icon.nome} />
                            <p>{icon.nome}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}