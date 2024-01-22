import "./CampoTexto.css";

const CampoTexto = (props) => {

  const aoDigitar = (e) => {
    props.aoAlterado(e.target.value)
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        onChange={aoDigitar}
        required={props.obrigatorio}
        placeholder={props.placeholder}
        value={props.valor}
      />
    </div>
  );
};

export default CampoTexto;
