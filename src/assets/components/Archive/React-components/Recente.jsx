import TopRecentes from "../Layout/TopRecentes";
import "../css/Recentes.css";
import DireitoFav from "../Layout/DireitoFav";
import { useState } from "react";
export default function Recentes({ history, setHistory, setItemSelecionado, adicionarFavorito }) {
  const [posicaoFav, setPosicaoFav] = useState({ x: 0, y: 0 });
  const [Direitofaav, setDireitoFav] = useState(false);
  
  return (
    <>
      <section className="recentes">
        <TopRecentes setHistory={setHistory} />
        <div className="Arquivos-Recentes">
          <h4>Recentes</h4>
          <div className="listas">
            {history.map((index) => (
              <div
                className="lista"
                key={index.id}
                onContextMenu={(e) => {
                  setPosicaoFav({
                    x: e.clientX,
                    y: e.clientY,
                  });
                  setItemSelecionado(index)
                  e.preventDefault();
                  e.stopPropagation();
                  console.log("clicou");
                  setDireitoFav(true);
                }}
              >
                <i className={index.icon}></i>
                <p>{index.nome}</p>
              </div>
            ))}
          </div>
          {Direitofaav && <DireitoFav posicaoFav={posicaoFav} adicionarFavorito={adicionarFavorito}/>}
        </div>
      </section>
    </>
  );
}
