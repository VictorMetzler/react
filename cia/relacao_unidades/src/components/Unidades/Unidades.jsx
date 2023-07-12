import "./Unidades.css";

export const Unidades = (props) => {
  return props.unidades.forEach((und) => {
    <section>
      <h3>{und.uf}</h3>
    </section>;
  });
};
