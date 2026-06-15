import { Navbar, Nav, Container } from "react-bootstrap";

function Menu() {
  return (
    <Navbar
      expand="lg"
      fixed="top"
      className="navbar-custom"
    >
      <Container>

        <Navbar.Brand href="#inicio">
          Geovanny Ruiz
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ms-auto">

            <Nav.Link href="#inicio">
              Inicio
            </Nav.Link>

            <Nav.Link href="#about">
              Sobre Mí
            </Nav.Link>

            <Nav.Link href="#tecnologias">
              Tecnologías
            </Nav.Link>

            <Nav.Link href="#proyectos">
              Proyectos
            </Nav.Link>

            <Nav.Link href="#contacto">
              Contacto
            </Nav.Link>

          </Nav>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default Menu;