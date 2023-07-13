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

  return (
    <section className="unidades">
      <Estados unidades={unidadesSorted} />
    </section>
  );
};
