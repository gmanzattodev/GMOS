import "../css/Aside.css";
export default function Aside({ ativo, setAtivo, pastas }) {
  const navegacao = [
    { id: 1, icon: "ri-home-5-line", paragrafo: "Inicio" },
    { id: 2, icon: "ri-time-line", paragrafo: "Recentes" },
    { id: 3, icon: "ri-star-line", paragrafo: "Favoritos" },
  ];

  const lixeira = {
    id: 10,
    icon: "ri-delete-bin-line",
    paragrafo: "Lixeira",
  };

  return (
    <>
      <aside className="Aside">
        <h5>Navegação</h5>
        <div className="aside-navegacao">
          {navegacao.map((nav) => (
            <div className={ativo === nav.id ? "port active" : "port"} key={nav.id} onClick={() => setAtivo(nav.id)}>
              <i className={nav.icon}></i>
              <p>{nav.paragrafo}</p>
            </div>
          ))}
        </div>
        <hr />
        <h5>Pastas</h5>
        <div className="portifolio-card">
          {pastas.map((pasta) => (
            <div className={ativo === pasta.id ? "port active" : "port"} key={pasta.id} onClick={() => setAtivo(pasta.id)}>
              <i className={pasta.icon}></i>
              <p>{pasta.paragrafo}</p>
            </div>
          ))}
        </div>
        <hr />
        <div className="port" key={lixeira.id}>
          <i className={lixeira.icon}></i>
          <p>{lixeira.paragrafo}</p>
        </div>
      </aside>
    </>
  );
}
