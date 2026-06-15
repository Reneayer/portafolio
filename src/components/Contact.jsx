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
          </a>

        </div>

      </Container>

    </section>
  );
}

export default Contact;