import "./css/WallpaperSection.css";
import { imagens } from "./WallPeper";
import { useRef, useState } from "react";
export default function WallpaperSection({ setMudarImagem }) {
const [border, setBorder] = useState(null)
const galeriaRef = useRef(null);
  const proximo = () => {
    galeriaRef.current.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };

  const anterior = () => {
    galeriaRef.current.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="Wallpaper-settings">
        <div className="info-wall">
          <i className="ri-image-line"></i>
          <div className="titulo">
            <h3>WALLPAPER</h3>
            <p>Escolha o wallpaper que combina com você.</p>
          </div>
        </div>
        <div className="container-galeria">
            <i className="ri-arrow-left-s-fill" onClick={anterior}></i>
            
            <div className="secao-galeria" ref={galeriaRef}>
            
              {imagens.map((index) => (
                <div className={border === index.id ? "imagens border" : "imagens"} key={index.id} onClick={() => {setMudarImagem(index.img); setBorder(index.id)}}>
                    {border === index.id ? <i className="ri-check-line"></i> : null}
                  <img src={index.img} alt="img" />
                </div>
              ))}
              
            </div>
            <i className="ri-arrow-right-s-fill" onClick={proximo}></i>
        </div>
      </section>
    </>
  );
}
