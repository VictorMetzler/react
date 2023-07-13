import Cidades from "../Cidades";
import "./Estados.css";

export const Estados = (props) => {
  let vUFatual = null;
  return (
    <>
      {props.unidades.map((undObj, vIndex) => {
        if (vUFatual != undObj.uf) {
          vUFatual = undObj.uf;
          return (
            <section className="estados">
              <h1>{vUFatual}</h1>
              <Cidades estado={vUFatual} unidades={props.unidades} />
            </section>
          );
        }
      })}
    </>
  );
};
