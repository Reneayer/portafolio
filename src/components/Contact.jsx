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
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;