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
          <Navbar variant="dark" className="col-12 p-0 text-center">
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
          <Navbar variant="dark" className="col-12 p-0 text-center">
            <Container className="justify-content-center p-0">
              <NavbarBrand className="text-normal">{props.titulo}</NavbarBrand>
            </Container>
          </Navbar>
        ) : (
          <Navbar
            expand="xxl"
            data-bs-theme="dark"
            className="col-12 p-1 m-0 justify-content-center justify-content-md-start"
          >
            <NavbarBrand className="p-0 m-0 col-12 col-md-auto me-md-4 mt-1 mt-md-0 text-center text-md-end">
              <Image
                className="p-0 m-0"
                src={props.img_path}
                alt="CiaAthletica"
                style={{
                  maxWidth: "35%",
                  minWidth: "120px",
                  boxSizing: "content-box",
                }}
              />
            </NavbarBrand>
            <div className="d-none d-md-block d-lg-block d-xl-block ms-md-1 me-0 me-md-3 text-white">
              |
            </div>
            <NavbarBrand className="p-0 m-0 mb-2 mb-md-0 ms-0 ms-md-3 mt-3 mt-md-0">
              {props.titulo}
            </NavbarBrand>
          </Navbar>
        )}
      </Container>
    </Navbar>
  );
};
