import { useState } from "react";
import "../css/CriarPasta.css";

export default function CriarPasta({ setInput, input, setAbrirPasta, setIconePasta, iconePasta, salvarPasta }) {
    const [escolher, setEscolher] = useState(false)
    
  
    const folderIcons = [
    {
      id: 1,
      nome: "Padrão",
      icon: "ri-folder-line",
    },
    {
      id: 2,
      nome: "Documentos",
      icon: "ri-folders-line",
    },
    {
      id: 3,
      nome: "Imagens",
      icon: "ri-folder-image-line",
    },
    {
      id: 4,
      nome: "Vídeos",
      icon: "ri-folder-video-line",
    },
    {
      id: 5,
      nome: "Músicas",
      icon: "ri-folder-music-line",
    },
    {
      id: 6,
      nome: "Downloads",
      icon: "ri-folder-download-line",
    },
    {
      id: 7,
      nome: "Upload",
      icon: "ri-folder-upload-line",
    },
    {
      id: 8,
      nome: "Favoritos",
      icon: "ri-folder-check-line",
    },
    {
      id: 9,
      nome: "Configurações",
      icon: "ri-folder-settings-line",
    },
    {
      id: 10,
      nome: "Segurança",
      icon: "ri-folder-shield-line",
    },
    {
      id: 11,
      nome: "Compartilhada",
      icon: "ri-folder-shared-line",
    },
    {
      id: 12,
      nome: "Recebidos",
      icon: "ri-folder-received-line",
    },
    {
      id: 13,
      nome: "Transferência",
      icon: "ri-folder-transfer-line",
    },
    {
      id: 14,
      nome: "Histórico",
      icon: "ri-folder-history-line",
    },
    {
      id: 15,
      nome: "Bloqueada",
      icon: "ri-folder-lock-line",
    },
    {
      id: 16,
      nome: "Aberta",
      icon: "ri-folder-open-line",
    },
    {
      id: 17,
      nome: "Informações",
      icon: "ri-folder-info-line",
    },
    {
      id: 18,
      nome: "Aviso",
      icon: "ri-folder-warning-line",
    },
    {
      id: 19,
      nome: "Adicionar",
      icon: "ri-folder-add-line",
    },
    {
      id: 20,
      nome: "Reduzir",
      icon: "ri-folder-reduce-line",
    },
  ];

  return (
    <>
      <article className="criarPasta">
        <div className="pasta-nova">
          <i className={iconePasta} onClick={() => setEscolher(true)}></i>
          <h1>{input ? input : "Criar Nova Pasta"}</h1>
          <input
            type="text"
            placeholder="Nome da pasta"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="btn-pasta">
            <button onClick={() => setAbrirPasta(false)}>Cancelar</button>
            <button className="salvar" onClick={() => {
              salvarPasta(),
              setAbrirPasta(false)
            }}>Salvar</button>
          </div>
        </div>
        {escolher ? (
        <div className="EscolherIcon">
            {folderIcons.map((icon) => (
                <div className={`icone-escolha ${iconePasta === icon.icon ? "ativo" : ""}`} key={icon.id} onClick={() => {setIconePasta(icon.icon); setEscolher(false)}}>
                    <i className={icon.icon}></i>
                    <p>{icon.nome}</p>
                </div>
            ))}

        </div>) : null}
      </article>
    </>
  );
}
