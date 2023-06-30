import "./Formulario.css";
import { CampoTexto } from "../CampoTexto/CampoTexto";
import { ListaSuspensa } from "../ListaSuspensa/ListaSuspensa";

export const Formulario = () => {
  const times = [
    "Programação",
    "Front End",
    "Data Science",
    "Devops",
    "UX e Design",
    "Mobiel",
    "Inovação e Gestão",
  ];

  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto label="Nome" placeholder="Digite seu nome" />
        <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" />
        <ListaSuspensa label="Time" itens={times} />
      </form>
    </section>
  );
};