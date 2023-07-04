import { useState } from "react";
import "./CampoTexto.css";

export const CampoTexto = (props) => {
  const [valor, setaValor] = useState("Victor");

  const aoDigitado = (evento) => {
    setaValor(evento.target.value);
    console.log(valor);
  };

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
