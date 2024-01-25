import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select
        defaultValue={""}
        onChange={(e) => props.aoAlterado(e.target.value)}
        required={props.obrigatorio}
        value={props.value}
      >
        <option value={""}></option>
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;
