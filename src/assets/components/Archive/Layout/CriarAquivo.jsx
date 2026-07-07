import { useState } from "react";
import "../css/CriarArquivo.css";
export default function CriarArquivo({ input, setInput, setAbrirArquivo, setIconeArquivo, iconeArquivo, salvarArquivo }) {
  
  const [escolhers, setEscolhers] = useState(false);

  const fileIcons = [
    {
      id: 1,
      nome: "Padrão",
      icon: "ri-file-line",
      color: "#E5E7EB",
    },
    {
      id: 2,
      nome: "Documento",
      icon: "ri-file-text-line",
      color: "#3B82F6",
    },
    {
      id: 3,
      nome: "Texto",
      icon: "ri-file-text-line",
      color: "#FFFFFF",
    },
    {
      id: 4,
      nome: "PDF",
      icon: "ri-file-pdf-line",
      color: "#EF4444",
    },
    {
      id: 5,
      nome: "Word",
      icon: "ri-file-word-line",
      color: "#2563EB",
    },
    {
      id: 6,
      nome: "Excel",
      icon: "ri-file-excel-line",
      color: "#22C55E",
    },
    {
      id: 7,
      nome: "PowerPoint",
      icon: "ri-file-ppt-line",
      color: "#F97316",
    },
    {
      id: 8,
      nome: "Apresentação",
      icon: "ri-slideshow-line",
      color: "#FACC15",
    },
    {
      id: 9,
      nome: "Imagem",
      icon: "ri-image-line",
      color: "#10B981",
    },
    {
      id: 10,
      nome: "Foto",
      icon: "ri-camera-line",
      color: "#22D3EE",
    },
    {
      id: 11,
      nome: "Vídeo",
      icon: "ri-video-line",
      color: "#EC4899",
    },
    {
      id: 12,
      nome: "Áudio",
      icon: "ri-file-music-line",
      color: "#A855F7",
    },
    {
      id: 13,
      nome: "Música",
      icon: "ri-music-2-line",
      color: "#9333EA",
    },
    {
      id: 14,
      nome: "Compactado",
      icon: "ri-file-zip-line",
      color: "#FACC15",
    },
    {
      id: 15,
      nome: "Código",
      icon: "ri-code-s-slash-line",
      color: "#3B82F6",
    },
    {
      id: 16,
      nome: "JavaScript",
      icon: "ri-javascript-line",
      color: "#F7DF1E",
    },
    {
      id: 17,
      nome: "TypeScript",
      icon: "ri-code-box-line",
      color: "#3178C6",
    },
    {
      id: 18,
      nome: "HTML",
      icon: "ri-html5-line",
      color: "#E34F26",
    },
    {
      id: 19,
      nome: "CSS",
      icon: "ri-css3-line",
      color: "#1572B6",
    },
    {
      id: 20,
      nome: "JSON",
      icon: "ri-braces-line",
      color: "#8B5CF6",
    },
    {
      id: 21,
      nome: "XML",
      icon: "ri-code-box-line",
      color: "#F97316",
    },
    {
      id: 22,
      nome: "CSV",
      icon: "ri-file-list-line",
      color: "#22C55E",
    },
    {
      id: 23,
      nome: "Markdown",
      icon: "ri-markdown-line",
      color: "#D1D5DB",
    },
    {
      id: 24,
      nome: "Arquivo",
      icon: "ri-file-line",
      color: "#FFFFFF",
    },
    {
      id: 25,
      nome: "Configuração",
      icon: "ri-settings-3-line",
      color: "#D1D5DB",
    },
    {
      id: 26,
      nome: "Banco de Dados",
      icon: "ri-database-2-line",
      color: "#A855F7",
    },
    {
      id: 27,
      nome: "Backup",
      icon: "ri-time-line",
      color: "#3B82F6",
    },
    {
      id: 28,
      nome: "Sistema",
      icon: "ri-cpu-line",
      color: "#D1D5DB",
    },
    {
      id: 29,
      nome: "Log",
      icon: "ri-file-list-3-line",
      color: "#FFFFFF",
    },
    {
      id: 30,
      nome: "Licença",
      icon: "ri-key-2-line",
      color: "#FACC15",
    },
    {
      id: 31,
      nome: "Certificado",
      icon: "ri-award-line",
      color: "#22C55E",
    },
    {
      id: 32,
      nome: "Executável",
      icon: "ri-terminal-box-line",
      color: "#8B5CF6",
    },
    {
      id: 33,
      nome: "Instalador",
      icon: "ri-download-2-line",
      color: "#22C55E",
    },
    {
      id: 34,
      nome: "Script",
      icon: "ri-terminal-line",
      color: "#F97316",
    },
    {
      id: 35,
      nome: "Atalho",
      icon: "ri-external-link-line",
      color: "#22D3EE",
    },
    {
      id: 36,
      nome: "Nuvem",
      icon: "ri-cloud-line",
      color: "#3B82F6",
    },
    {
      id: 37,
      nome: "E-mail",
      icon: "ri-mail-line",
      color: "#A855F7",
    },
    {
      id: 38,
      nome: "Favorito",
      icon: "ri-heart-line",
      color: "#EC4899",
    },
    {
      id: 39,
      nome: "Lixeira",
      icon: "ri-delete-bin-line",
      color: "#D1D5DB",
    },
  ];

  return (
    <>
      <article className="Criararquivos">
        <div className="criar-arq">
          <i className={iconeArquivo} onClick={() => setEscolhers(true)}></i>
          <h1>{input ? input : "Criar Novo Arquivo"}</h1>
          <input
            type="text"
            placeholder="Nome do Arquivo"
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="btn-arquivo">
            <button onClick={() => setAbrirArquivo(false)}>Cancelar</button>
            <button className="salvar" onClick={() => {
              salvarArquivo(),
              setAbrirArquivo(false)
            }}>Salvar</button>
          </div>
        </div>
        {escolhers ? (
          <div className="arquivos-criado">
            {fileIcons.map((file) => (
              <div
                className="card-arquivo"
                key={file.id}
                onClick={() => {
                  setIconeArquivo(file.icon);
                  setEscolhers(false);
                }}
              >
                <i className={file.icon} style={{ color: file.color }}></i>
                <p>{file.nome}</p>
              </div>
            ))}
          </div>
        ) : null}
      </article>
    </>
  );
}
