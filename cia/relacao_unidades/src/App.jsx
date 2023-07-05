import Container from "react-bootstrap/Container";
import Menu from "./components/Menu";

function App() {
  return (
    <Container
      fluid
      className="p-0"
      style={{
        backgroundColor: "var(--cia-bg-color)",
        color: "var(--cia-color)",
      }}
    >
      <Menu
        img_path="/images/cia_logo.png"
        bg_color="var(--cia-header-bg-color)"
      />
    </Container>
  );
}

export default App;
