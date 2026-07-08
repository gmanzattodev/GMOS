import { useState } from "react";
import Aside from "../components/Archive/React-components/aside";
import Topbar from "../components/Archive/React-components/Topbar";
import Recente from "../components/Archive/React-components/Recente";
import "./css/Gerenciador.css";
import Inicio from "../components/Archive/React-components/Inicio";
import Favoritos from "../components/Archive/React-components/Favoritos";
import Projetos from "../components/Archive/React-components/Projetos";

export default function Gerenciador({ closeApp, id }) {
  const [ativo, setAtivo] = useState(1);
  const [maximized, setMaximized] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [iconePasta, setIconePasta] = useState("ri-folder-line");
  const [iconeArquivo, setIconeArquivo] = useState("ri-file-line");
  const [itemSelecionado, setItemSelecionado] = useState(null);
  const [arrayFavorito, setArrayFavorito] = useState([]);

  const salvarPasta = () => {
    setHistory((prev) => [
      ...prev,
      {
        id: Date.now(),
        tipo: "pasta",
        icon: iconePasta,
        nome: input,
      },
    ]);
  };
  const salvarArquivo = () => {
    setHistory((prev) => [
      ...prev,
      {
        id: Date.now(),
        tipo: "arquivo",
        icon: iconeArquivo,
        nome: input,
      },
    ]);
  };

  const pastas = [
    {
      id: 4,
      icon: "ri-layout-grid-fill",
      paragrafo: "Projetos",
      cor: "orange",
      item: 4,
    },
    {
      id: 5,
      icon: "ri-verified-badge-fill",
      paragrafo: "Certificados",
      cor: "purple",
      item: 10,
    },
    {
      id: 6,
      icon: "ri-import-line",
      paragrafo: "Download",
      cor: "green",
      item: 0,
    },
    {
      id: 7,
      icon: "ri-image-2-line",
      paragrafo: "Imagens",
      cor: "yellow",
      item: 3,
    },
    { id: 8, icon: "ri-album-line", paragrafo: "Videos", cor: "red", item: 2 },
    {
      id: 9,
      icon: "ri-folder-open-line",
      paragrafo: "Documentos",
      cor: "blue",
      item: 1,
    },
  ];
  const favoritos = [
    {
      id: 1,
      icon: "ri-star-smile-fill",
      paragrafo: "Favoritos",
      cor: "gold",
      item: 8,
    },
    {
      id: 2,
      icon: "ri-history-line",
      paragrafo: "Recentes",
      cor: "cyan",
      item: 12,
    },
    {
      id: 3,
      icon: "ri-delete-bin-6-line",
      paragrafo: "Lixeira",
      cor: "gray",
      item: 5,
    },
    {
      id: 4,
      icon: "ri-hard-drive-2-line",
      paragrafo: "Armazenamento",
      cor: "teal",
      item: "256 GB",
    },
  ];
  const propsInicio = {
    pastas,
    favoritos,
    maximized,
    input,
    setInput,
    iconePasta,
    setIconePasta,
    iconeArquivo,
    setIconeArquivo,
    salvarArquivo,
    salvarPasta,
    setAtivo,
  };
  const adicionarFavorito = () => {
    if (!itemSelecionado) return;

    setArrayFavorito((prev) => [...prev, itemSelecionado]);
  };
  const removerFavorito = (id) => {
    setArrayFavorito((prev) => prev.filter((item) => item.id !== id))
  }
  const paginas = {
    1: <Inicio {...propsInicio} />,
    2: (
      <Recente
        history={history}
        setHistory={setHistory}
        setItemSelecionado={setItemSelecionado}
        adicionarFavorito={adicionarFavorito}
        
      />
    ),
    3: (
      <Favoritos
        arrayFavorito={arrayFavorito}
        removerFavorito={removerFavorito}
      />
    ),
    4: <Projetos />
  };
  

  return (
    <>
      <section className={maximized ? "Gerenciador maximizar" : "Gerenciador"}>
        <header className="topbar-gerenciador">
          <Topbar
            closeApp={closeApp}
            id={id}
            setMaximized={setMaximized}
            maximized={maximized}
          />
        </header>
        <main className="geral">
          <Aside ativo={ativo} setAtivo={setAtivo} pastas={pastas} />
          {paginas[ativo]}
        </main>
      </section>
    </>
  );
}
