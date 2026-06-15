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