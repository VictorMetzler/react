import "./Colaborador.css";

export const Colaborador = ({ nome, cargo, imagem }) => {
  console.log("Vai incluir colaborador, nome: ", nome);
  return (
    <div className="colaborador">
      <div className="cabecalho">
        <img src={imagem} alt={nome} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
};
