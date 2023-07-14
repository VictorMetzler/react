import Cidades from "../Cidades";
import "./Estados.css";

export const Estados = (props) => {
  let vCidadeAtual = null;
  return (
    <section className="estados">
      <h1 className="titulo">{props.uf}</h1>
      {props.unidades.map((undObj, vIndex) => {
        if (vCidadeAtual != undObj.cidade) {
          vCidadeAtual = undObj.cidade;
          return (
            <Cidades
              key={vCidadeAtual}
              cidade={vCidadeAtual}
              unidades={props.unidades.filter(
                (unidade) => unidade.cidade === vCidadeAtual
              )}
            />
          );
        }
      })}
    </section>
  );
};
