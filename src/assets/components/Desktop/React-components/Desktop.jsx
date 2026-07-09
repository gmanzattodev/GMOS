import Dock from "./Dock";
import "../css/Desktop.css";
import { useLayoutEffect, useRef, useState } from "react";
import Terminal from "./terminal";
import Configuracao from "../../../page/Configuracao";
import Home from "../../../page/Home";
import Cpu from "./Cpu";
import Menu from "./Menu";
import Direito from "./Direito";
import gsap from "gsap";
import Gerenciador from "../../../page/Gerenciador";
import Wifi from "./Wifi";
import { imagens } from "../../Config/WallPeper";
import Calculadora from "../apps/Calculadora";

export default function Desktop() {
  const [windows, setWindows] = useState([]);
  const [abrirMenu, setAbrirMenu] = useState(false);
  const [direitoAbrir, setDireitoAbrir] = useState(false);
  const [internet, setInternet] = useState(false);
  const [abrirWifi, setAbrirWifi] = useState(false);
  const [posicao, setPosicao] = useState({ x: 0, y: 0 });
  const TitiloRef = useRef();
  const Dockref = useRef();
  const Gpu = useRef();
  const [mudarImagem, setMudarImagem] = useState(imagens[0].img);
  const [MudarDock, setMudarDock] = useState(1);

  useLayoutEffect(() => {
    const tl = gsap
      .timeline()
      .fromTo(
        TitiloRef.current,
        {
          opacity: 0,
          scale: 0.2,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
        },
        0,
      )
      .fromTo(
        Gpu.current,
        {
          opacity: 0,
          scale: 0.1,
        },
        {
          opacity: 1,
          duration: 0.5,
          scale: 1,
          ease: "back.inOut",
        },
        0.5,
      )
      .fromTo(
        Dockref.current,
        {
          opacity: 0,
          scale: 0.1,
        },
        {
          opacity: 1,
          scale: 1,
          ease: "back.out",
          duration: 0.5,
        },
        1,
      );
  }, []);

  function openApp(type) {
    setWindows((prev) => [
      ...prev,
      {
        id: Date.now(),
        type,
      },
    ]);
  }
  function closeApp(id) {
    setWindows((prev) => prev.filter((window) => window.id !== id));
  }

  return (
    <>
      <section
        className="Desktop"
        onContextMenu={(e) => {
          e.preventDefault();
          setPosicao({ x: e.clientX, y: e.clientY });
          setDireitoAbrir(true);
        }}
        onClick={() => setDireitoAbrir(false)}
        style={{ backgroundImage: `url(${mudarImagem})` }}
      >
        <div className="menubar">
          <p onClick={() => setAbrirMenu((prev) => !prev)} ref={TitiloRef}>
            GM OS
          </p>
          <div className="icone-menu">
            <i className="ri-bluetooth-line"></i>
            <i
              className="ri-wifi-fill"
              onClick={() => setAbrirWifi((prev) => !prev)}
            ></i>
            <span>18:45</span>
          </div>
        </div>

        {direitoAbrir && <Direito posicao={posicao} />}
        {abrirMenu && (
          <Menu
            openApp={openApp}
            setAbrirMenu={setAbrirMenu}
          />
        )}

        {abrirWifi ? (<Wifi setInternet={setInternet} setAbrirWifi={setAbrirWifi} />) : null}
        <Cpu Gpu={Gpu} />
        <Dock openApp={openApp} Dockref={Dockref} MudarDock={MudarDock} />

        {windows.map((window) => {
          switch (window.type) {
            case "Terminal":
              return (
                <Terminal  key={window.id} id={window.id} closeApp={closeApp} />
              );

            case "Browser":
              return (
                <Home
                  key={window.id}
                  id={window.id}
                  closeApp={closeApp}
                  internet={internet}
                />
              );

            case "Files":
              return (
                <Gerenciador
                  key={window.id}
                  id={window.id}
                  closeApp={closeApp}
                />
              );

            case "Calculadora":
              return (
                <Calculadora
                  key={window.id}
                  id={window.id}
                  closeApp={closeApp}
                />
              );

            case "Configurações":
              return (
                <Configuracao
                  key={window.id}
                  id={window.id}
                  closeApp={closeApp}
                  setMudarImagem={setMudarImagem}
                  setMudarDock={setMudarDock}
                />
              );

            default:
              return null;
          }
        })}
      </section>
    </>
  );
}
