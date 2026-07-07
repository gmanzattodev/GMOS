
import "../css/Main.css";
export default function Main({ setTelaAtiva, telaAtiva, setInput, input, output, executarComando }) {
  
  return (
    <>
      {telaAtiva ? (
        <div className="janela-navegador">
          {telaAtiva}
        </div>
      ) : (
        <main className="Browser-main">
          <div className="hero">
            <div className="hero-title">
              <h1>Boa tarde, Giovani</h1>
              <p>Vamos Construir algo incrivel hoje.</p>
            </div>
            <div className="widgets">
              <i className="ri-search-line"></i>
              <input
                type="text"
                placeholder="Pesquisar na web"
                className="input-central"
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    executarComando();
                    setInput("")
                  }
                }}
              />
              <i className="ri-arrow-right-line"></i>
            </div>
            <p>{output}</p>
          </div>
        </main>
      )}
    </>
  );
}
