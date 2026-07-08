import { useLayoutEffect, useRef, useState } from "react";
import "../css/Terminal.css";
import gsap from "gsap";

export default function Terminal({ closeApp, id }) {
  const miniRef = useRef(null);
  const terminalEndRef = useRef();
  const [maxmizar, setMaxmizar] = useState(false);
  const [minimizar, setMinimizar] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);

  const comandos = {
    help: `
Comandos: 
- Help
- Sobre
- Contatos
- Skills
- Habilidades
- Clear`,
    about: `

Nome: Giovani Manzatto Furlan

Objetivo Profissional:
Atuar como Desenvolvedor Front-End, contribuindo no desenvolvimento de interfaces modernas,  responsivas e de alta performance, com foco em experiência do usuário e soluções escaláveis para aplicações web.

Busco constante evolução técnica por meio do aprimoramento em tecnologias de desenvolvimento web, engenharia de software e integração entre sistemas. Também tenho interesse em expandir conhecimentos em C++ aplicado à Internet das Coisas (IoT), visando o desenvolvimento de soluções conectadas com dispositivos inteligentes.

Meu objetivo é unir desenvolvimento web e IoT para criar aplicações avançadas, como dashboards interativos em tempo real, integrados a protocolos de comunicação como MQTT, permitindo monitoramento, automação e troca de dados entre sistemas web e dispositivos externos.

Tenho interesse em atuar em projetos que envolvam:

- Desenvolvimento Front-End moderno
- Interfaces responsivas e intuitivas
- Dashboards analíticos em tempo real
- Integração com APIs e sistemas externos
- IoT e comunicação via MQTT
- Soluções escaláveis para monitoramento e automação

Isso demonstra meu interesse em construir soluções tecnológicas inovadoras, conectando software, hardware e experiência digital.

`,
    contatos: `
Contato

Nome: Giovani Manzatto Furlan
Telefone: +55 19 995937457
E-mail: giovanimanzattof@gmail.com
LinkedIn: https://www.linkedin.com/in/giovanimanzattofurlan
GitHub: https://github.com/gmanzattodev

Resumo de Contato Profissional

Estou disponível para oportunidades na área de Desenvolvimento Front-End, projetos freelancers e colaborações em desenvolvimento web e tecnologia.

Tenho interesse em oportunidades relacionadas a:

-  Desenvolvimento Front-End
-  Interfaces modernas e responsivas
-  Dashboards interativos
-  Integração com APIs

Sempre aberto a novos desafios, networking e projetos inovadores na área de tecnologia.    
    `,
    skills: `
Front-End Development

-  HTML5
-  CSS3
-  JavaScript (ES6+)
-  React.js
-  Responsive Design
-  UI/UX Fundamentals
-  Component-Based Architecture    
    `,
    habilidades: `
Habilidades Técnicas

- Desenvolvimento de interfaces modernas
- Criação de dashboards interativos
- Integração com APIs
- Desenvolvimento de aplicações responsivas
- Estruturação de projetos escaláveis
- Versionamento de código
- Otimização de performance

Soft Skills

- Resolução de problemas
- Pensamento analítico
- Aprendizado contínuo
- Organização
- Trabalho em equipe
- Comunicação
- Adaptabilidade  
    `

  };
  useLayoutEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history]);
  const handleMinimizar = () => {
    if (!miniRef.current) return;
    gsap.to(miniRef.current, {
      opacity: 0,
      x: 300,
      y: 500,
      scale: 0.2,
      duration: 0.5,
      onComplete: () => {
        setMinimizar(true);
      },
    });
  };
  if (minimizar) return null;
  return (
    <>
      <section
        className={`${maxmizar ? "terminal maximed" : "terminal"}`}
        ref={miniRef}
      >
        <div className="menu-terminal">
          <p>Terminal - GM OS</p>

          <div className="btn">
            <button className="close-btn" onClick={handleMinimizar}>
              <i className="ri-subtract-line"></i>
            </button>
            <button
              className="close-btn"
              onClick={() => setMaxmizar(!maxmizar)}
            >
              <i className={maxmizar ? "ri-checkbox-multiple-blank-line" : "ri-square-line"}></i>
            </button>
            <button className="close" onClick={() => closeApp(id)}>
              <i className="ri-close-line"></i>
            </button>
          </div>
        </div>
        <div className="tela-terminal">
          {history.map((historico, index) => (
            <p className="historico" key={index}>
              {historico}
            </p>
          ))}
          <div className="text">
            <p className="marcar-terminal">GM-OS@Giovani:~$</p>
            <input
              type="text"
              value={input}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  const comandoDigitado = input.toLowerCase();

                  if (comandoDigitado === "clear") {
                    setHistory([]);
                    setInput("");
                    return;
                  }
                  if (comandos[comandoDigitado]) {
                    setHistory([...history, comandos[comandoDigitado]]);
                  } else {
                    setHistory([...history, "Comando nao encontrado"]);
                  }
                  setInput("");
                }
              }}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <div ref={terminalEndRef} />
        </div>
      </section>
    </>
  );
}
