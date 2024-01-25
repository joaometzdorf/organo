import "./Colaborador.css";

const Colaborador = (props) => {
  return (
    <div className="colaborador">
      <div>
        <img src="https://github.com/joaometzdorf.png" alt="Foto do colaborador" />
      </div>
      <div>
        <h4>{props.nome}</h4>
        <h5>{props.cargo}</h5>
      </div>
    </div>
  );
};

export default Colaborador;
