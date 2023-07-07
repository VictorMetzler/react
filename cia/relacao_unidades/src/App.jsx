import Container from "react-bootstrap/Container";
import Header from "./components/Header";

function App() {
  return (
    <Container
      fluid
      className="p-0 m-0"
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
    </Container>
  );
}

export default App;
