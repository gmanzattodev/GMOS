import { useState } from 'react'
import '../css/Wifi.css'

export default function Wifi({ setInternet, setAbrirWifi }){
    const [redeClicado, setRedeClicado] = useState(false) 
    const  [texto, setTexto] = useState("Rede segura")
    
    function mudarTexto(){
        setTimeout(() => {
            setTexto("Conectando...")
            setTimeout(() => {
                setTexto("Conectado")
                setInternet(true)
            }, 4000);
        }, 100);

    }
    function Fechar(){
        setTimeout(() => {
            setAbrirWifi(false)
        }, 5000);
    }
    return (
        <>
            <div className="Wifi-secao">
                <div className="info-wifi">
                    <i className="ri-wifi-line"></i>
                    <h2>Conectar ao Wi-fi</h2>
                    <p>Selecione a rede para se conectar</p>
                </div>
                <div className="card-wifi" onClick={() => setRedeClicado(prev => !prev)}>
                    <div className="inform-wifi">
                        <i className="ri-wifi-fill" style={{ color: texto === "Conectado" ? "green" : "white"}}></i>
                        <div className="card-wifi-info">
                            <h4>GM_Network</h4>
                            <p>{texto}</p>
                        </div>
                    </div>
                    <div className="seguro-wifi">
                        <hr />
                        <i class="ri-lock-line"></i>
                    </div>
                </div>
                {redeClicado ? (<div className="btn-wifi">
                    <button onClick={() => {
                        mudarTexto();
                        Fechar();
                    }}>Conectar</button>
                </div>) : null}
            </div>
        
        </>
     )
}