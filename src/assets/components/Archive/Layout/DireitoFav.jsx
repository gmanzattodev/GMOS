import "../css/Favoritos.css";
export default function DireitoFav({ posicaoFav, adicionarFavorito }) {
  
  
  return (
    <>
      <div className="favoritos-btn" style={{ left: posicaoFav.x, top: posicaoFav.y}} onClick={adicionarFavorito}>
        <button>Adicionar ao Favorito</button>
      </div>
    </>
  );
}
