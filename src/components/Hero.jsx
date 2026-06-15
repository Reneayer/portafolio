<<<<<<< HEAD
export default function Hero() {
  return (
    <section className="hero">
      <div style={{ maxWidth: '1024px', margin: '0 auto', padding: '0 20px', width: '100%' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
          
          {/* Textos de Presentación */}
          <div style={{ flex: '1', minWidth: '300px' }}>
            <span className="status-badge">Disponible para Trabajar</span>
            <h1 className="hero-title">Desarrollador Web</h1>
            <h2 className="hero-subtitle" style={{ fontSize: '2.5rem', fontWeight: '700', margin: '0' }}>
              & Analista de Datos
            </h2>
            <p className="hero-text">
              Me especializo en diseñar e implementar interfaces web modernas, limpias y responsivas, así como en estructurar soluciones analíticas sobre bases de datos para optimizar los flujos de información y la toma de decisiones estratégicas.
            </p>
            <div className="hero-buttons">
              <a href="#proyectos" className="hero-btn" style={{ padding: '12px 24px', color: 'black', fontWeight: 'bold', borderRadius: '8px', textDecoration: 'none' }}>
                Ver Proyectos
              </a>
              <a href="#tecnologias" style={{ padding: '12px 24px', color: 'white', border: '1px solid #1e293b', borderRadius: '8px', textDecoration: 'none', background: '#1e293b' }}>
                Habilidades
              </a>
            </div>
          </div>

          {/* Tu Avatar Circular con Gradiente */}
          <div className="avatar-container" style={{ flex: '1', minWidth: '300px' }}>
            <div className="avatar-circle">
              DS
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
=======
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
>>>>>>> 89f1908c9364af888c5887630e9223bb548a3771
