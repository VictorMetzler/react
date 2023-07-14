import Estados from "./Estados";
import "./Unidades.css";

export const Unidades = (props) => {
  const unidadesSorted = props.unidades.sort((vUndA, vUndB) => {
    if (
      vUndA.uf + vUndA.cidade + vUndA.nomecurtoapresentacao ==
      vUndB.uf + vUndB.cidade + vUndB.nomecurtoapresentacao
    ) {
      return 0;
    }
    return vUndA.uf + vUndA.cidade + vUndA.nomecurtoapresentacao <
      vUndB.uf + vUndB.cidade + vUndB.nomecurtoapresentacao
      ? -1
      : 1;
  });
  let vUFatual = null;
  return (
    <section className="unidades">
      {unidadesSorted.map((undObj, vIndex) => {
        if (vUFatual != undObj.uf) {
          vUFatual = undObj.uf;
          return (
            <Estados
              key={vUFatual}
              uf={vUFatual}
              unidades={unidadesSorted.filter(
                (unidade) => unidade.uf === vUFatual
              )}
            />
          );
        }
      })}
    </section>
  );
};
