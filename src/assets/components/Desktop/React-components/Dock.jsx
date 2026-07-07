
import "../css/Dock.css";
import { useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { temas } from "../../Config/WallPeper"

export default function Dock({ setOpenApp, Dockref, MudarDock }) {
  const [passMouse, setPassMouse] = useState(null);
  
  



  return (
    <>
      <section className="Dock" ref={Dockref}>
        {temas[MudarDock].map((app) => (
          <div className="Dock-app" key={app.id} onClick={() => setOpenApp((prev) => (prev === app.nome ? null : app.nome))} onMouseMove={() => { setPassMouse(app.id); }} onMouseLeave={() => setPassMouse(false)}>
            <img src={app.img} alt={app.nome} />
            {passMouse === app.id && <p>{app.nome}</p>}
          </div>
        ))}
      </section>
    </>
  );
}
