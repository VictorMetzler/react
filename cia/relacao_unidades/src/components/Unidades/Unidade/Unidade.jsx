import "./Unidade.css";

export const Unidade = (props) => {
  return (
    <section className="unidade">
      <h3>{props.unidade.nomeapresentacao}</h3>
      <img src="./public/images/kansas_fachada.webp" />
      <div className="cabecalho">cabeçalho</div>
      <div className="rodape">
        <h4>Rodapé</h4>
        <h5>texto</h5>
      </div>
    </section>
  );
};
