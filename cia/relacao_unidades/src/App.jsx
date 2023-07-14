import Container from "react-bootstrap/Container";
import Header from "./components/Header";
import Unidades from "./components/Unidades";

function App() {
  const unidades = [
    {
      cod_unid: 1,
      uf: "SP",
      cidade: "Granja Viana",
      nomecurtoapresentacao: "GV",
      nomeapresentacao: "Granja Viana",
    },
    {
      cod_unid: 2,
      uf: "MAO",
      cidade: "Manaus",
      nomecurtoapresentacao: "Manaus",
      nomeapresentacao: "Manaus",
    },
    {
      cod_unid: 3,
      uf: "SP",
      cidade: "São Paulo",
      nomecurtoapresentacao: "Morumbi",
      nomeapresentacao: "MorumbiShopping",
    },
    {
      cod_unid: 4,
      uf: "SP",
      cidade: "São Paulo",
      nomecurtoapresentacao: "Kansas",
      nomeapresentacao: "Kansas",
    },
  ];

  return (
    <Container
      fluid
      className="p-0"
      style={{
        backgroundColor: "var(--cia-bg-color, #f51a2e)",
        color: "var(--cia-color, #424242)",
      }}
    >
      <Header
        img_path="/images/cia_logo.png"
        bg_color="var(--cia-header-bg-color, #f51a2e)"
        titulo="Relação das Unidades"
      />
      <Unidades unidades={unidades} />
    </Container>
  );
}

export default App;
