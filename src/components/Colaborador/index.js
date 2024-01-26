import "./Colaborador.css";

const Colaborador = ({ nome, cargo, imagem, corDeFundo, aoDeletar, corDoNome }) => {

  return (
    <div className="colaborador">
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt={nome} />
      </div>
      <div className="rodape">
        <h4 style={{ color: corDoNome }}>{nome}</h4>
        <h5>{cargo}</h5>
        <div className="btn__deletar">
          <button onClick={aoDeletar} style={{ backgroundColor: corDeFundo }}>Deletar</button>
        </div>
      </div>
    </div>
  );
};

export default Colaborador;
