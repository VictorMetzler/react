import Container from "react-bootstrap/Container";
import Header from "./components/Header";
import Unidades from "./components/Unidades";

function App() {
  const unidades = [
    {
      cod_unid: 1,
      uf: "B",
      cidade: "Granja Viana",
      nomecurtoapresentacao: "Kansas",
      nomeapresentacao: "Kansas",
    },
    {
      cod_unid: 1,
      uf: "B",
      cidade: "Campo Grande",
      nomecurtoapresentacao: "Z",
      nomeapresentacao: "Kansas",
    },
    {
      cod_unid: 1,
      uf: "B",
      cidade: "Campo Grande",
      nomecurtoapresentacao: "Azazel",
      nomeapresentacao: "Kansas",
    },
    {
      cod_unid: 1,
      uf: "A",
      cidade: "SAO PAULO",
      nomecurtoapresentacao: "Morumbi",
      nomeapresentacao: "MorumbiShopping",
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
