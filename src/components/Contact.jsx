<<<<<<< HEAD
import { Container } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <section id="contacto" className="section">

      <Container className="text-center">

        <h2>Contacto</h2>

        <p>
          ¿Te interesa trabajar conmigo?
        </p>

        <div className="social-icons">

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://wa.me/50500000000"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />
=======
function Contact() {
  return (
    <section
      id="contacto"
      className="contact-section"
    >
      <div className="container text-center">

        <h2 className="section-title">
          Contacto
        </h2>

        <p className="mb-3">
          Geovanny Ruiz
        </p>

        <p className="mb-3">
          Managua, Nicaragua
        </p>

        <p className="mb-4">
          geovannyruiz@gmail.com
        </p>

        <div className="contact-icons">

          <a href="mailto:geovannyruiz@gmail.com">
            <i className="bi bi-envelope-fill"></i>
          </a>

          <a href="https://wa.me/50588888888">
            <i className="bi bi-whatsapp"></i>
          </a>

          <a href="#">
            <i className="bi bi-linkedin"></i>
>>>>>>> 89f1908c9364af888c5887630e9223bb548a3771
          </a>

        </div>

<<<<<<< HEAD
      </Container>

=======
      </div>
>>>>>>> 89f1908c9364af888c5887630e9223bb548a3771
    </section>
  );
}

export default Contact;