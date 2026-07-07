import { useLayoutEffect } from 'react';
import '../css/Direito.css'


export default function Direito({ posicao }) {

    return (
    <>
      <article className="direito" style={{ position: "fixed", left: posicao.x, top: posicao.y}}>
        <h5>Apricativos</h5>
        <div className="direito-card">
            <i className="ri-folder-fill"></i>
            <p>Arquivos</p>
        </div>
        <div className="direito-card">
            <i className="ri-terminal-box-fill"></i>
            <p>Terminal</p>
        </div>
        <div className="direito-card">
            <i className="ri-settings-3-fill"></i>
            <p>Configuração</p>
        </div>
        <div className="direito-card">
            <i className="ri-global-fill"></i>
            <p>Navegador</p>
        </div>
        <hr />
        <h5>Portifólio</h5>
        <div className="direito-card">
            <i className="ri-folder-fill"></i>
            <p>Projetos</p>
        </div>
        <div className="direito-card">
            <i className="ri-award-fill"></i>
            <p>Certificados</p>
        </div>
        <div className="direito-card">
            <i className="ri-account-circle-fill"></i>
            <p>Sobre</p>
        </div>
        <div className="direito-card">
            <i className="ri-mail-fill"></i>
            <p>Contato</p>
        </div>
        <div className="direito-card">
            <i className="ri-code-box-fill"></i>
            <p>Skills</p>
        </div>
        <div className="direito-card">
            <i className="ri-lightbulb-fill"></i>
            <p>Habilidades</p>
        </div>
      </article>
    </>
  );
}
