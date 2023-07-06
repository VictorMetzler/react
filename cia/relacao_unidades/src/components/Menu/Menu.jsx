import { NavbarBrand } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export const Menu = (props) => {
  return (
    <Navbar
      style={{
        backgroundColor: props.bg_color ? props.bg_color : "transparent",
      }}
    >
      <Container fixed="top" className="p-0">
        <Navbar expand="xxl" variant="dark" className="p-0 text-center">
          <Container className="col-12 col-md-8 justify-content-center justify-content-md-start p-0">
            <NavbarBrand className="ms-2 ms-md-0 col-7">
              {props.img_path ? (
                <Image
                  src={props.img_path}
                  fluid
                  alt="Cia Athletica"
                  style={{ maxWidth: "65%" }}
                />
              ) : (
                ""
              )}
            </NavbarBrand>
            <div className="d-none d-md-block d-lg-block d-xl-block me-0 me-md-3 text-white">
              |
            </div>
            <NavbarBrand className="mb-2 mb-md-0 ms-2 ms-md-0 ms-md-3 text-normal">
              {props.titulo}
            </NavbarBrand>
          </Container>
        </Navbar>
      </Container>
    </Navbar>
  );
};
