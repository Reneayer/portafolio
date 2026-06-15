<<<<<<< HEAD
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
=======
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top custom-navbar">
      <div className="container">

        <a className="navbar-brand fw-bold" href="#">
          Geovanny Ruiz
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="menu"
        >
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <a className="nav-link" href="#inicio">
                Inicio
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#tecnologias">
                Tecnologías
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#proyectos">
                Proyectos
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contacto">
                Contacto
              </a>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
>>>>>>> 89f1908c9364af888c5887630e9223bb548a3771
