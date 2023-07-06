import { NavbarBrand } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Navbar from "react-bootstrap/Navbar";

export const Header = (props) => {
  return (
    <Navbar
      style={{
        backgroundColor: props.bg_color ? props.bg_color : "transparent",
      }}
    >
      <Container fixed="top" className="p-0">
        {props.img_path && !props.titulo ? (
          <Navbar
            expand="xxl"
            variant="dark"
            className="col-12 p-0 text-center"
          >
            <Container className="col-12 p-0">
              <NavbarBrand className="col-12">
                <Image
                  src={props.img_path}
                  fluid
                  alt="Cia Athletica"
                  width="116px"
                />
              </NavbarBrand>
            </Container>
          </Navbar>
        ) : !props.img_path && props.titulo ? (
          <Navbar
            expand="xxl"
            variant="dark"
            className="col-12 p-0 text-center"
          >
            <Container className="justify-content-center p-0">
              <NavbarBrand className="text-normal">{props.titulo}</NavbarBrand>
            </Container>
          </Navbar>
        ) : (
          <Navbar expand="xxl" variant="dark" className="p-0 text-center">
            <Container className="col-12 col-md-8 justify-content-center justify-content-md-start p-0">
              <NavbarBrand className="ms-3 ms-md-0 col-7 p-1">
                <Image
                  src={props.img_path}
                  fluid
                  alt="Cia Athletica"
                  style={{ maxWidth: "70%" }}
                />
              </NavbarBrand>
              <div className="d-none d-md-block d-lg-block d-xl-block mb-md-1 me-0 me-md-3 text-white">
                |
              </div>
              <NavbarBrand className="mb-1 mb-md-1 ms-3 ms-md-0 ms-md-3 mt-1 mt-md-0 text-normal">
                {props.titulo}
              </NavbarBrand>
            </Container>
          </Navbar>
        )}
      </Container>
    </Navbar>
  );
};
