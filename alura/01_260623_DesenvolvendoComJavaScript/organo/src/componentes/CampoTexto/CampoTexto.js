import "./CampoTexto.css";
let valor = "Victor";
const aoDigitado = (evento) => {
  let valor = evento.target.value;
  console.log(valor);
};

export const CampoTexto = (props) => {
  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={valor}
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={props.placeholder}
      />
    </div>
  );
};
