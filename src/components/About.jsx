import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <section className="section" id="about">
      <Container>

        <Row className="align-items-center">

          <Col md={5} className="text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="perfil"
              className="about-image"
            />
          </Col>

          <Col md={7}>
            <h2>Sobre Mí</h2>

            <p>
              Soy Geovanny Ruiz, desarrollador frontend especializado
              en la creación de Landing Pages modernas para negocios
              reales de Nicaragua.
            </p>

            <p>
              Trabajo con React, Bootstrap, JavaScript,
              Supabase y Power BI.
            </p>

          </Col>

        </Row>

      </Container>
    </section>
  );
}

export default About;