import Cidades from "../Cidades";
import "./Estados.css";

export const Estados = (props) => {
  let vCidadeAtual = null;
  return (
    <section className="estados">
      <h1>{props.uf}</h1>
      {props.unidades.map((undObj, vIndex) => {
        if (vCidadeAtual != undObj.cidade) {
          vCidadeAtual = undObj.cidade;
          return (
            <>
              <h2>{vCidadeAtual}</h2>
              <Cidades
                cidade={vCidadeAtual}
                unidades={props.unidades.filter(
                  (unidade) => unidade.cidade === vCidadeAtual
                )}
              />
            </>
          );
        }
      })}
    </section>
  );
};
