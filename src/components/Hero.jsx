function Hero() {
  return (
    <section
      id="inicio"
      className="hero-section"
    >
      <div className="container">

        <span className="badge bg-success mb-4">
          React Developer
        </span>

        <h1>
          Geovanny Ruiz
        </h1>

        <p className="hero-text mt-4">

          Desarrollo experiencias web modernas,
          optimizadas y responsivas utilizando
          React, JavaScript y Bootstrap.

          <div className="hero-stats">

  <div>
    <h2>5+</h2>
    <span>Proyectos</span>
  </div>

  <div>
    <h2>React</h2>
    <span>Frontend</span>
  </div>

  <div>
    <h2>100%</h2>
    <span>Responsive</span>
  </div>

</div>

        </p>

        <div className="mt-5">

          <a
            href="#proyectos"
            className="btn btn-success btn-lg me-3"
          >
            Ver Proyectos
          </a>

          <a
            href="#contacto"
            className="btn btn-outline-light btn-lg"
          >
            Contacto
          </a>

        </div>

      </div>
    </section>
  );
}

export default Hero;