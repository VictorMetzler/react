import { Unidade } from "../Unidade/Unidade";
import "./Cidades.css";

export const Cidades = (props) => {
  return (
    <section className="cidades">
      <h2 className="titulo">{props.cidade}</h2>
      {props.unidades.map((unidade) => (
        <Unidade key={props.cod_unid} unidade={unidade} />
      ))}
    </section>
  );
};
