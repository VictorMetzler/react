import "./Unidades.css";

export const Unidades = (props) => {
  const unidadesSorted = props.unidades.sort((vUndA, vUndB) => {
    if (
      vUndA.uf + vUndA.cidade + vUndA.nomecurtoapresentacao <
      vUndB.uf + vUndB.cidade + vUndB.nomecurtoapresentacao
    ) {
      return -1;
    } else if (
      vUndA.uf + vUndA.cidade + vUndA.nomecurtoapresentacao >
      vUndB.uf + vUndB.cidade + vUndB.nomecurtoapresentacao
    ) {
      return 1;
    } else return 0;
  });

  return unidadesSorted.forEach((und) => {
    <section>
      <h3>{und.uf}</h3>
    </section>;
  });
};
