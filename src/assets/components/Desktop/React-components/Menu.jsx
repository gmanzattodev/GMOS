import { useState } from "react";
import "../css/Menu.css";
export default function Menu({ setAbrirMenu, setOpenApp, opensApp }) {
  const [input, setInput] = useState("");

  const aplicativos = [
    {
      nome: "Arquivos",
      icone: "ri-folder-line",
      app: "Files",
    },
    {
      nome: "Navegador",
      icone: "ri-global-line",
      app: "Browser",
    },
    {
      nome: "Terminal",
      icone: "ri-terminal-box-line",
      app: "Terminal",
    },
    {
      nome: "Configurações",
      icone: "ri-settings-3-line",
      app: "Configurações",
    },
    {
      nome: "Calculadora",
      icone: "ri-calculator-line",
      app: "Calculadora",
    },
  ];
  return (
    <>
      <section className="Menu-logo">
        <header className="menu-header">
          <div className="input-menu">
            <i className="ri-search-line"></i>
            <input
              type="text"
              placeholder="Pesquisar..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <div className="apricativos-menu">
            <p>Apricativos</p>
            <div className="apps">
                <div className="cards-menu">
                  {aplicativos.filter((item) => item.nome.toLowerCase().includes(input.toLowerCase()),).map((item) => (
                      <div key={item.nome} className="card-menu" onClick={() => {setOpenApp(item.app); setAbrirMenu(false); }} >
                        <i className={item.icone}></i>
                        <p>{item.nome}</p>
                      </div>
                    ))}
                </div>
            </div>
            <hr />
            <div className="cards-menu">
              <div className="encerramento">
                <i className="ri-shut-down-line"></i>
                <p>Desligar</p>
              </div>
              <div className="encerramento">
                <i className="ri-restart-line"></i>
                <p>Reiniciar</p>
              </div>
              <div className="encerramento">
                <i className="ri-moon-line"></i>
                <p>Suspender</p>
              </div>
            </div>
          </div>
        </header>
      </section>
    </>
  );
}
