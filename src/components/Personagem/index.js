import "./Personagem.css";

const Personagem = ({ nome, anime, imagem, corDeFundo, aoDeletar, corDoNome }) => {

  return (
    <div className="personagem">
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt={nome} />
      </div>
      <div className="rodape">
        <h4 style={{ color: corDoNome }}>{nome}</h4>
        <h5>{anime}</h5>
        <div className="btn__deletar">
          <button onClick={aoDeletar} style={{ backgroundColor: corDeFundo }}>Deletar</button>
        </div>
      </div>
    </div>
  );
};

export default Personagem;
