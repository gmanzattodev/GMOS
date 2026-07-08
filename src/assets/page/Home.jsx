import Main from "../components/Browser/React-components/Main";
import Header from "../components/Browser/React-components/Header";
import Carros from "../components/Browser/React-components/Carros";
import AgroNova from "../components/Browser/React-components/AgroNova";
import Error from "../components/Browser/React-components/Error";
import { useState, useRef } from "react";
import "./css/Home.css";

export default function Home({ id, closeApp, internet }) {
  const [maximizar, setMaximizar] = useState(false);
  const minimeRef = useRef(null);
  const [telaAtiva, setTelaAtiva] = useState(null);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const normalizar = (texto) => texto.trim().replace(/\s+/g, " ");
  const comandoDigitado = normalizar(input);

  const comandos = {
    "https://gmanzattodev.github.io/EsportCars": "carros",
    "https://gmanzattodev.github.io/agro": "agro",
  };

  const executarComando = () => {
    const resultado = comandos[comandoDigitado];

    if (!resultado) {
      setOutput("Comando não encontrado");
      return;
    }

    setTelaAtiva(resultado);
    setOutput("");
    setInput("");
  };

  let telaRenderizada = null;

  if (telaAtiva === "carros") {
    telaRenderizada = internet ? <Carros /> : <Error internet={internet} />;
  }

  if (telaAtiva === "agro") {
    telaRenderizada = <AgroNova />;
  }

  const propsHeader = {
    id,
    closeApp,
    maximizar,
    setMaximizar,
    minimeRef,
    setTelaAtiva,
    telaAtiva,
    executarComando,
    input,
    setInput,
  };

  const propsMain = {
    setTelaAtiva,
    telaAtiva: telaRenderizada,
    input,
    setInput,
    output,
    executarComando,
  };

  return (
    <section
      className={`${maximizar ? "Browser maximized-Browser" : "Browser"}`}
      ref={minimeRef}
    >
      <Header {...propsHeader} />
      <Main {...propsMain} />
    </section>
  );
}