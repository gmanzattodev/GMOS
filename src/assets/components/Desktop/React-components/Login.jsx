import Perfil from "../../../img/perfil.jpeg";
import PerfilNovo from '../../../img/perfilnovo.jpeg'
import { useEffect, useRef, useState } from "react";
import "../css/Login.css";
import gsap from "gsap";

export default function Login({ setLogged }) {
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState("");
  const [mostrarCard, setMostrarCard] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const UsuarioRef = useRef()
  const [olharSenha, setOlharSenha] = useState(false)
  const [aparecerImage, setAparecerImage] = useState(false)
  const animationRef = useRef()

  const credenciais = {
    nome: "Giovani",
    senha: "1234",
  };

  function error(){
    const tl = gsap.timeline()

    tl.to(UsuarioRef.current, {
      y: -5,
      duration: 0.06
    })
    .to(UsuarioRef.current, {
      y: 5,
      duration: 0.06,
      repeat: 6,
      yoyo: true
    })
    .to(UsuarioRef.current, {
      y: 0
    })
  }
  const animationIMage = () => {
    gsap.fromTo(animationRef.current, {
      opacity: 0
    }, {
      opacity: 1,
      duration: 1
    })
  }

  function handlogado() {
    if (password === credenciais.senha && users === credenciais.nome) {
      setLogged(true);
    } else {
      setMensagem("Usuario ou senha incorretos!");
      setMostrarCard(true);
      error()
      setPassword("")
      setUsers("")
      setTimeout(() => {
        setMostrarCard(false);
      }, 3000);
    }
  }
  useEffect(() => {
    if(aparecerImage){
      animationIMage()
    }
  }, [aparecerImage])

  return (
    <>
      <section className="login">
        {aparecerImage ? <img  className="fundoimage" src={Perfil} alt="perfil" ref={animationRef} /> : null}
        {mostrarCard && (
          <div className="card-mensagem">
            <i className="ri-error-warning-line"></i>
            <p>{mensagem}</p>
          </div>
        )}
        <article className="card-perfil">
          <div className="img">
            <img onClick={() => setAparecerImage(prev => !prev)} src={aparecerImage ? PerfilNovo : Perfil} alt="Imagem de perfil" />
          </div>
          <div className="input-boxs" ref={UsuarioRef}>
            <div className="input-box">
              <i className="ri-user-6-line"></i>
              <input
                className="input"
                type="text"
                value={users}
                placeholder="Digite seu nome"
                onChange={(e) => setUsers(e.target.value)}
              />
              <p>{users.length}</p>
            </div>
            <div className="input-box">
              <i className={olharSenha ? "ri-lock-unlock-line" : "ri-lock-line"}></i>
              {olharSenha ? <input
                className="input"
                type="text"
                value={password}
                placeholder="Digite sua senha"
                onChange={(e) => setPassword(e.target.value)}
              /> : <input
                className="input"
                type="password"
                value={password}
                placeholder="Digite sua senha"
                onChange={(e) => setPassword(e.target.value)}
              />}
              <p style={{ color: password.length >= 5 ? "red" : "white"}}>{password.length}</p>
              <i onClick={() => setOlharSenha(prev => !prev)} className={olharSenha ? "ri-eye-line" : "ri-eye-close-line"}></i>
            </div>
          </div>
          <button onClick={handlogado}>Entrar</button>
        </article>
      </section>
    </>
  );
}
