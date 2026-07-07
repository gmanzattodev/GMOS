import { useState } from "react";
import AcessoRapido from "../Layout/AcessoRapido";
import NovaPage from "../Layout/NovaPage";
import CriarPasta from "../Layout/criarPasta";
import "../css/NovaPage.css";
import CriarArquivo from "../Layout/CriarAquivo";
export default function Inicio({
  pastas,
  favoritos,
  maximized,
  setAtivo,
  input,
  setInput,
  iconePasta,
  setIconePasta,
  setIconeArquivo,
  iconeArquivo,
  salvarPasta,
  salvarArquivo
}) {
  const [AbrirPasta, setAbrirPasta] = useState(false);
  const [AbrirAquivo, setAbrirArquivo] = useState(false);

  return (
    <>
      <main className="inicio">
        <NovaPage
          setAbrirPasta={setAbrirPasta}
          setAbrirArquivo={setAbrirArquivo}
        />
        <AcessoRapido
          pastas={pastas}
          favoritos={favoritos}
          maximized={maximized}
        />
        {AbrirPasta ? (
          <CriarPasta
            setInput={setInput}
            input={input}
            setAbrirPasta={setAbrirPasta}
            setIconePasta={setIconePasta}
            iconePasta={iconePasta}
            salvarPasta={salvarPasta}
          />
        ) : null}
        {AbrirAquivo ? (
          <CriarArquivo
            setAbrirArquivo={setAbrirArquivo}
            input={input}
            setInput={setInput}
            iconeArquivo={iconeArquivo}
            setIconeArquivo={setIconeArquivo}
            salvarArquivo={salvarArquivo}
          />
        ) : null}
      </main>
    </>
  );
}
