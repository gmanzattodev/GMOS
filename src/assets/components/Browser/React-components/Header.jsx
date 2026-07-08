import '../css/Header.css'
import perfilBrowser from '../../../img/perfilBrowser.jpeg'
import { useRef, useState } from 'react';
import gsap from 'gsap';
export default function header({ id, closeApp, maximizar, setMaximizar, minimeRef, setTelaAtiva, telaAtiva, input, setInput, executarComando }) {
  const [minimizar, setMinimizar] = useState(false)
  

  const handminimeze = () => {
    if(!minimeRef.current) return
    gsap.to(minimeRef.current, {
      opacity: 0,
      duration: 0.5,
      x: 200,
      y: 400,
      scale: 0.1,
      onComplete: () => {
        setMinimizar(true)
      }
    })
  }
  
  if(minimizar) return null
  return (
    <>
      <header className="Browser-header">
        <div className="tabs">
          <div className="guia-home">
            <div className="novaguia-home">
              <p>Nova Aba</p>
              <i className="ri-close-line"></i>
            </div>
            <i className="ri-add-line"></i>
          </div>
          <div className="btn-header">
              <button onClick={handminimeze}>
                <i className="ri-subtract-line"></i>
              </button>
              <button onClick={() => setMaximizar(!maximizar)}>
                <i className={maximizar ? "ri-checkbox-multiple-blank-line" : "ri-square-line"}></i>
              </button>
              <button className='close' onClick={() => closeApp(id)}>
                <i className="ri-close-line"></i>
              </button>
          </div>
        </div>
        <div className="toolbar">
          <i className="ri-arrow-left-line" onClick={() => setTelaAtiva(null)}></i>
          <i className="ri-arrow-right-line"></i>
          <i className="ri-restart-line restart"></i>
          <div className="input-box-home">
            <input
              type="text"
              placeholder="Pesquisar ou digitar URL"
              className="input-home"
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if(e.key === "Enter"){
                  executarComando()
                }
              }}
            />
            <i className="ri-star-line"></i>
          </div>
          <i className="ri-puzzle-2-line"></i>
          <hr />
          <img src={perfilBrowser} alt="perfil" />
          <hr />
          <i className="ri-more-2-line ponto"></i>
        </div>
      </header>
    </>
  );
}
